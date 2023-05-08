"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  caja: {
    type: Number,
    enum: [1, 2],
    default: 1 ,
    required: true,
  },
  rol: {
    type: String,
    enum: ["admin", "usuario"],
    default: "usuario",
  },
});
// método para validar la contraseña
usuarioSchema.methods.validarContrasena = async function (contrasena) {
  return await bcrypt.compare(contrasena, this.contrasena);
};

module.exports = mongoose.model("Usuario", usuarioSchema);
