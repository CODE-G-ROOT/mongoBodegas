import dotenv from 'dotenv'
dotenv.config();

const confi = JSON.parse(JSON.stringify(process.env));

const data = {
    url_connect : confi.URL_CONNECT_MONGODB,
    database: confi.ATLAS_USE,
    server_config : {
        hostname : confi.HOSTNAME,
        port : confi.PORT
    }
}

export default data;
