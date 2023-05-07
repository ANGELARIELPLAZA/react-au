"use strict";

// Importa el módulo de validación de Joi
const Joi = require("joi");
const bcrypt = require("bcrypt");

// Define las reglas de validación
const reglasValidacion = Joi.object({
  nombre: Joi.string().required().min(0).messages({
    "string.base": "debe ser una cadena de texto",
    "any.required": "El campo nombre es requerido",
  }),
  email: Joi.string().required().messages({
    "string.email": "debe ser una dirección de correo electrónico válida",
    "any.required": "El campo correo electrónico es requerido",
  }),
  contrasena: Joi.string().required().min(0).messages({
    "string.base": "debe ser mayor a 8 caracteres",
    "any.required": "El campo contrasena es requerido",
  }),
}).options({ abortEarly: false });

// Crea una función para validar el usuario
function validarUsuario(usuario) {
  const resultadoValidacion = reglasValidacion.validate(usuario);

  if (resultadoValidacion.error) {
    // Si hay un error de validación, devuelve un mensaje de error HTTP
    throw new Error(resultadoValidacion.error.details[0].message);
  }
}

const compararContrasena = async (contrasena, hash) => {
  try {
    return await bcrypt.compare(contrasena, hash);
  } catch (error) {
    console.error(error);
    throw new Error("Error al comparar contraseñas");
  }
};

module.exports = {
  validarUsuario,
  compararContrasena,
};
