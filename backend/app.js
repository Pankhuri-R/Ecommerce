const express = require("express");
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());

//import routes

const products = require("./routes/productRoute");

app.use("/api/v1", products);

//error handling middleware
app.use(errorMiddleware);

module.exports = app;
