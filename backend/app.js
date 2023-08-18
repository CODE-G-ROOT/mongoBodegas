import dotenv from 'dotenv';
import expres from 'express';
// import { token, verify } from './helpers/token.js';

console.clear();

dotenv.config();
const server_config = JSON.parse(process.env.SERVER_CONFIG);

const app = expres();
app.listen(server_config, ()=>{
    console.log(`http://${server_config.hostname}:${server_config.port}`);
}) 
