// import { MongoClient } from "mongodb";
import { MongoClient } from "mongodb";
import data from "../settings.js";

let connection = undefined;

const client = new MongoClient(data.url_connect);

try {
    connection = await client.connect();
} catch (error) {
    console.error(error);
}

let db = connection.db(data.database);

export default db;