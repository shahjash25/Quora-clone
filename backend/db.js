const mongoose = require("mongoose");

const url ="mongodb://shahjash25:%40jash2003IIT@ac-uybadbf-shard-00-00.whnwwet.mongodb.net:27017,ac-uybadbf-shard-00-01.whnwwet.mongodb.net:27017,ac-uybadbf-shard-00-02.whnwwet.mongodb.net:27017/?ssl=true&replicaSet=atlas-tgwexb-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
