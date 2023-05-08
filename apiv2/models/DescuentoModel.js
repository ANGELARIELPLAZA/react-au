const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let descuentoSchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  nombre_boleto: {
    type: String,
    required: true,
  },
  descuento: {
    type: Number,
    required: true,
  },
});
// Define the static method "findByCode" in the Descuento schema
descuentoSchema.statics.findByCode = async function (code) {
  return await this.findOne({ code: code });
};

module.exports = mongoose.model("Descuento", descuentoSchema, "descuentos");
