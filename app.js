const express = require("express");
const filmRouter = require("./Routers/filmRouter");
const userRouter = require("./Routers/userRouter");
const orderRouter = require("./Routers/orderRouter");
const mongoose = require("./db");

const app = express();

const port = 3000;


// Importacion de rutas





// Middlewares

app.use(express.json());

//USE DE ENDPOINTS

//Enrutador de peliculas con el recurso /pelicula

app.use(filmRouter);

// Enrutador de usuarios con el recurso /user

app.use(userRouter);

// Enrutador de pedidos con el recurso /order

app.use(orderRouter);

const conectionDb = require("./db");
conectionDb.then(() => {
    app.listen(port, () => console.log(`Listening at ${port}`));
});