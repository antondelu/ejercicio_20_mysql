const express = require("express");
const router = require("./routes");
const mongoDb = require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoDb();

app.use("/", router);
app.listen(port, () => {
  console.log(`Escuchando a http://localhost:${port}/usuarios`);
});
