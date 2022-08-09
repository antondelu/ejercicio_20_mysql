const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();

router.get("/usuarios", userController.getUsers);
router.get("/usuarios/crear", userController.getCreateUsers);
router.get("/usuarios/editar/:id", userController.getEditUser);
router.get("/usuarios/eliminar/:id", userController.deleteUser);
router.post("/usuarios/crear", userController.postCreateUsers);
router.post("/usuarios/editar/:id", userController.postEditUser);

module.exports = router;
