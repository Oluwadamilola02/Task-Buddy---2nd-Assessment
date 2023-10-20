const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("connection to database is successful");
  });

  mongoose.connection.on("error", (err) => {
    console.log("An error occurred while connecting to MongoDB", err);
  });
};

module.exports = { connectToMongoDB };

// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectToMongoDB = () => {
//   mongoose.connect(process.env.MONGODB_URL,  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = mongoose.connection;

//   db.on("error", (err) => {
//     console.error("An error occurred while connecting to MongoDB:", err);
//   });

//   db.once("open", () => {
//     console.log("Connection to MongoDB is successful");
//   });
// };

// module.exports = { connectToMongoDB };
