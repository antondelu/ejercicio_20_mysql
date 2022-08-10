const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();

router.get("/usuarios", userController.index);
router.get("/usuarios/crear", userController.create);
router.get("/usuarios/editar/:id", userController.edit);
router.get("/usuarios/eliminar/:id", userController.destroy);
router.post("/usuarios/crear", userController.store);
router.post("/usuarios/editar/:id", userController.update);

module.exports = router;
