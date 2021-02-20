const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;

logger("libreria mongoose requerida");

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DBNAME = process.env.MONGO_DBNAME || "practicas";
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ?
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}` :
    `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`



const mongoose = mongoose.connect(QUERY_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger("conexion establecida");
    })
module.exports = mongoose;