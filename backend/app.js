import expres from 'express';
import data from './settings.js';
import db from './connection/connect.js';
// import { token, verify } from './helpers/token.js';

// console.clear();

const app = expres();
app.listen(data.server_config, ()=>{
    console.log(`http://${data.server_config.hostname}:${data.server_config.port}`);
}) 
