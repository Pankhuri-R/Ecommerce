const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const connectdb = async () => {
  const db = await mongoose.connect(process.env.MDB_CONNECT, {
    //   useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`DB connected at ${db.connection.host}`);
};

module.exports = connectdb;
