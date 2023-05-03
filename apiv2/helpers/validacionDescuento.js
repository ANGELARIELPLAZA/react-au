"use strict";
const Joi = require("joi");

const reglasValidacion = Joi.object({
  code: Joi.number().required().min(1).messages({
    "string.base": "debe ser un número",
    "any.required": "El campo code es requerido",
  }),
  nombre_boleto: Joi.string().required().min(3).messages({
    "string.base": "debe ser una cadena de texto",
    "any.required": "El campo nombre de boleto es requerido",
  }),
  descuento: Joi.number().required().min(3).messages({
    "number.base": "debe ser un número",
    "any.required": "El campo precio es requerido",
  }),
}).options({ abortEarly: false });


// Crea una función para validar el usuario
function validarDescuento(descuento) {
  const resultadoValidacion = reglasValidacion.validate(descuento);

  if (resultadoValidacion.error) {
    // Si hay un error de validación, devuelve un mensaje de error HTTP
    throw new Error(resultadoValidacion.error.details[0].message);
  }
}
module.exports = {
  validarDescuento
};
