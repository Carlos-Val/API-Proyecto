const express = require("express");
const filmController = require("./Controllers/filmController");
const mongoose = require("./db");



const app = express();

const port = 3000;

app.listen(port, () => console.log(`Listening at ${port}`));