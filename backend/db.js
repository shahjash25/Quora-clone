const mongoose = require("mongoose");

const url ="mongodb://shahjash25:%40jash2003IIT@ac-uc1uqhg-shard-00-00.j3mitoa.mongodb.net:27017,ac-uc1uqhg-shard-00-01.j3mitoa.mongodb.net:27017,ac-uc1uqhg-shard-00-02.j3mitoa.mongodb.net:27017/quora_clone_mern?ssl=true&replicaSet=atlas-zteneq-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
