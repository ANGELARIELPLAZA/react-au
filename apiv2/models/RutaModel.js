'use strict'
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
    enum: ['coatzacoalcos'],
    default: 'coatzacoalcos',
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  modificado_por: {
    type: Schema.ObjectId,
    ref: "UsuarioModel"
  },
  precio: {
    type: Number,
    required: true,
  },
  habilitado: {
    type: Number,
    default: 1,
    required: true,
  },
});

module.exports = mongoose.model("Ruta", rutaSchema, "rutas");
