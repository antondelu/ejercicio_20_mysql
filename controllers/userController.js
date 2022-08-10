const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataUsers = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
});
const Users = mongoose.model("Users", dataUsers);

const userControlers = {
  index: async (req, res) => {
    const usuarios = await Users.find();
    return res.render("index", { usuarios });
  },
  create: async (req, res) => {
    res.render("nuevoUsuario");
  },
  store: async (req, res) => {
    const newUser = Users.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
    });
    res.redirect("/usuarios");
  },
  edit: async (req, res) => {
    const usuario = await Users.findById(req.params.id);
    res.render("editarUsuario", { usuario });
  },
  update: async (req, res) => {
    await Users.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
        },
      }
    );
    res.redirect("/usuarios");
  },
  destroy: async (req, res) => {
    await Users.deleteOne({ _id: req.params.id });
    res.redirect("/usuarios");
  },
};

module.exports = userControlers;
