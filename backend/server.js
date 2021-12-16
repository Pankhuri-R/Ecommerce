const app = require("./app");

const dotenv = require("dotenv");

const connectdb = require("./config/database");

//config

dotenv.config({ path: "backend/config/config.env" });

//connecting to DB

connectdb();

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on http://localhost:${process.env.PORT}`);
});
