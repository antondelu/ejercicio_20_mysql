const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = (mongoose) => {
  const dataUsers = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
  });
  const Users = mongoose.model("Users", dataUsers);
};
