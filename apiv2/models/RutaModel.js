"use strict";
const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let rutaSchema = new Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  origen: {
    type: String,
    enum: ["coatzacoalcos"],
    default: "coatzacoalcos",
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Ruta", rutaSchema, "rutas");
