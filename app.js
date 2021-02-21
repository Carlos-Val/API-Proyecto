const express = require("express");
const filmRouter = require("./Routers/filmRouter");
const mongoose = require("./db");

const app = express();

const port = 3000;


// Importacion de rutas


let userRouter = require('./routers/userRouter');
let orderRouter = require('./routers/orderRouter');

// Middlewares

app.use(express.json());

//USE DE ENDPOINTS

//Enrutador de peliculas con el recurso /pelicula

app.use(filmRouter);

// Enrutador de usuarios con el recurso /user

//app.use("/user", userRouter);

// Enrutador de pedidos con el recurso /order

//app.use("/order", orderRouter);


db
    .then(() => {
        app.listen(port, () => console.log(`Listening at ${port}`));
    })
    .catch((err) => console.log(err.message));