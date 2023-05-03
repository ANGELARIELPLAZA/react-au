const mongoose = require("mongoose");
const moment = require("moment-timezone");
const Schema = mongoose.Schema;

let ventaSchema = new Schema({
  destino_code: {
    type: String,
    required: true,
  },
  num_boletos: {
    type: String,
    required: true,
  },
  descuento: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  vendedor: {
    type: String,
    required: true,
  },
  nombre_ruta: {
    type: String,
    required: true,
  },
  caja: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  totalventa: {
    type: Number,
    required: true,
  },
  created_at: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Venta", ventaSchema, "ventas");