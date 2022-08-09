const connectionDb = require("../db");

const userControlers = {
  getUsers: async (req, res) => {
    const [listaUsuarios, campos] = await connectionDb("SELECT * FROM users");
    return res.render("index", {
      listaUsuarios,
    });
  },
  getCreateUsers: async (req, res) => {
    res.render("nuevoUsuario");
  },
  postCreateUsers: async (req, res) => {
    await connectionDb(
      `INSERT INTO users (firstname, lastname, age) VALUES ("${req.body.firstname}","${req.body.lastname}", "${req.body.age}")`
    );
    res.redirect("/usuarios");
  },
  getEditUser: async (req, res) => {
    const [usuario] = await connectionDb(
      `SELECT * FROM users WHERE id =${req.params.id}`
    );

    res.render("editarUsuario", { usuario });
  },
  postEditUser: async (req, res) => {
    console.log(req.body);
    await connectionDb(
      `UPDATE users SET firstname = "${req.body.firstname}",lastname = "${req.body.lastname}", age= "${req.body.age}" WHERE id ="${req.params.id}"`
    );
    res.redirect("/usuarios");
  },
  deleteUser: async (req, res) => {
    await connectionDb(`DELETE  FROM users WHERE id =${req.params.id}`);
    res.redirect("/usuarios");
  },
};

module.exports = userControlers;
