"use strict";
const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const check = require("../middlewares/auth");

router.post("/login", UsuarioController.login);
router.get("/list", check.auth, UsuarioController.listarUsuarios);
router.get("/profile/:id", check.auth, UsuarioController.profile);
router.get("/list/:id", check.auth, UsuarioController.obtenerUsuario);
router.post("/creat", UsuarioController.crearUsuario);
router.put("/:id", check.auth, UsuarioController.actualizarUsuario);
router.delete("/:id", check.auth, UsuarioController.eliminarUsuario);

module.exports = router;
