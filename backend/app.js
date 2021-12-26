const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

//import routes

const products = require("./routes/productRoute");
const users = require("./routes/userRoutes");

app.use("/api/v1", products);
app.use("/api/v1", users);

//error handling middleware
app.use(errorMiddleware);

module.exports = app;
