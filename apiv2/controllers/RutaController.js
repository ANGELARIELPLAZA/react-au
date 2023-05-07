"use strict";
const Ruta = require("../models/RutaModel");
const { validarRuta } = require("../helpers/validacionRuta");

// List all routes
const listarRutas = async (req, res) => {
  try {
    const rutas = await Ruta.find();
    res.status(200).json(rutas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// Get a specific route
const obtenerRuta = async (req, res) => {
  try {
    const ruta = await Ruta.findById(req.params.id);
    if (!ruta) {
      return res.status(404).json({ mensaje: "Ruta no encontrada" });
    }
    res.json(ruta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al obtener la ruta" });
  }
};
// Create a new route
const crearRuta = async (req, res, next) => {
  let params = req.body;
  if (!params.code || !params.destino || !params.precio) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  try {
    const code = params.code;
    const destino = params.destino;
    const precio = params.precio;

    // Validar la ruta
    validarRuta({ code, destino, precio });

    // Si la validación es exitosa, crear la ruta
    const ruta = new Ruta({
      code,
      destino,
      precio,
    });

    await ruta.save();
    res
      .status(201)
      .json({ status: "success", mensaje: "Ruta creada exitosamente" });
  } catch (error) {
    // Si se produce un error de validación, enviar un mensaje de error y un estado al servidor
    if (error.code === 11000) {
      res
        .status(400)
        .json({ status: "ya_existe", mensaje: "La ruta ya existe" });
    } else {
      res.status(400).json({ status: "error", mensaje: error.message });
    }
    next();
  }
};
// Update a route
const actualizarRuta = async (req, res) => {
  try {
    const { origen, destino, precio, habilitado } = req.body;
    const { id } = req.params;

    const ruta = await Ruta.findById(id);

    if (!ruta) {
      return res.status(404).json({ mensaje: "Ruta no encontrada" });
    }

    ruta.origen = origen;
    ruta.destino = destino;
    ruta.precio = precio;
    ruta.habilitado = habilitado;
    ruta.updated_at = new Date();

    await ruta.save();

    res.json({ mensaje: "Ruta actualizada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al actualizar la ruta" });
  }
};
// Delete a route
const eliminarRuta = async (req, res) => {
  try {
    const { id } = req.params;

    const ruta = await Ruta.findById(id);

    if (!ruta) {
      return res.status(404).json({ mensaje: "Ruta no encontrado" });
    }

    await Ruta.deleteOne({ _id: id });

    res.json({ mensaje: "Ruta eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al eliminar la ruta" });
  }
};

module.exports = {
  listarRutas,
  obtenerRuta,
  crearRuta,
  actualizarRuta,
  eliminarRuta,
};
