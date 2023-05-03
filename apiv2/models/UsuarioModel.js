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
  habilitado: {
    type: Number,
    default: 1,
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now,
  },
  updated_At: {
    type: Date,
    default: Date.now,
  },
});
// método para validar la contraseña
usuarioSchema.methods.validarContrasena = async function (contrasena) {
  return await bcrypt.compare(contrasena, this.contrasena);
};

module.exports = mongoose.model("Usuario", usuarioSchema);
