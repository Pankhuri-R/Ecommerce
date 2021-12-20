const app = require("./app");

const dotenv = require("dotenv");

const connectdb = require("./config/database");

//config

dotenv.config({ path: "backend/config/config.env" });

//connecting to DB

connectdb();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server up and running on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
