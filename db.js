const mongoose = require("mongoose");
const connection = require("./mongoDb/connection");
const testConnection = require("./testConnection");
const schema = require("./mongoDb/schema");

module.exports = () => {
  connection(mongoose);
  testConnection(mongoose);
  //schema();
};
