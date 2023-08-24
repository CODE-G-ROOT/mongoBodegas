import 'reflect-metadata';
import data from '../settings';

import { plainToClass, classToPlain } from 'class-transformer';
import { Router } from 'express';
import { SignJWT, calculateJwkThumbprint, jwtVerify } from 'jose';

import Bodegas from '../DTO/bodegas.js';
import Historiales from '../DTO/historiales.js';
import Inventarios from '../DTO/inventario.js';
import Productos from '../DTO/productos.js';
import Users from '../DTO/users.js';

const token = Router();
const verify = Router();

const DTO = (p1) => {
    const match = {
        "users" : Bodegas,
        "bodegas" : Historiales,
        "productos" : Inventarios,
        "inventarios" : Productos,
        "historiales" : Users,
        "mongo": Error
    };

    const inst = match[p1];
    if(!inst) throw {status: 404, message: "Token invalid"}
    return { atributos: plainToClass(inst, {}, { ignoreDecorators: true }), class: inst}
};

token.use('/:collection', async(req, res) => {
    try {
        
        let inst = DTO(req.params.collection).atributos;
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor 
            .setProtectedHeader({alg:"HS256", typ: "JWT"})
            .setIssuedAt()
            .setExpirationTime("30m")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status: 201, message: jwt});

    } catch (error) {
        res.status(error.status).send(error);
    };
});

verify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(498).send({status: 498, token: "Invalid Token", reference: "https://http.cat/498"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado", reference: "https://http.cat/498"});
    }
}); 

export {
    token,
    verify,
    DTO
}