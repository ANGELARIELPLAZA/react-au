"use strict";
const Descuento = require("../models/DescuentoModel");
const { validarDescuento } = require("../helpers/validacionDescuento");

const listarDescuentos = async (req, res) => {
  try {
    const descuentos = await Descuento.find();
    res.json(descuentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al listar los descuentos" });
  }
};

const obtenerDescuento = async (req, res) => {
  try {
    const codigoDescuento = parseInt(req.params.id);
    const descuento = await Descuento.findByCode(codigoDescuento);
    if (!descuento) {
      return res.status(404).json({ mensaje: "Descuento no encontrado" });
    }
    res.json(descuento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al obtener el descuento" });
  }
};

const crearDescuento = async (req, res, next) => {
  let params = req.body;
  if (!params.code || !params.nombre_boleto || !params.descuento) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  try {
    const code = params.code;
    const nombre_boleto = params.nombre_boleto;
    const descuento = params.descuento;
    // Validar el descuento
    validarDescuento({ code, nombre_boleto, descuento });
    // Si la validación es exitosa, crear el descuento
    const descuentoNuevo = new Descuento({
      code,
      nombre_boleto,
      descuento,
    });

    await descuentoNuevo.save();

    res
      .status(201)
      .json({ status: "success", mensaje: "Descuento creado exitosamente" });
  } catch (error) {
    // Si se produce un error de validación, enviar un mensaje de error y un estado al servidor
    if (error.code === 11000) {
      res
        .status(400)
        .json({ status: "ya_existe", mensaje: "El descuento ya existe" });
    } else {
      res.status(400).json({ status: "error", mensaje: error.message });
    }
    next();
  }
};

const actualizarDescuento = async (req, res) => {
  try {
    const { code, nombre_boleto, descuento, habilitado } = req.body; // Cambia el nombre de la variable descuento a descuentoNuevo
    const { id } = req.params;

    const descuentoid = await Descuento.findById(id);
    if (!descuentoid) {
      return res.status(404).json({ mensaje: "Descuento no encontrado" });
    }

    descuentoid.nombre_boleto = nombre_boleto;
    descuentoid.descuento = descuento; // Usa la variable descuentoNuevo para actualizar el descuento
    descuentoid.habilitado = habilitado;
    descuentoid.code = code;
    descuentoid.updatedAt = new Date();

    await descuentoid.save();

    res.json({ mensaje: "Descuento actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Hubo un error al actualizar el descuento" });
  }
};

const eliminarDescuento = async (req, res) => {
  try {
    const { id } = req.params;

    const descuento = await Descuento.findById(id);

    if (!descuento) {
      return res.status(404).json({ mensaje: "Descuento no encontrado" });
    }

    await Descuento.deleteOne({ _id: id });

    res.json({ mensaje: "Descuento eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al eliminar el descuento" });
  }
};

module.exports = {
  listarDescuentos,
  obtenerDescuento,
  crearDescuento,
  actualizarDescuento,
  eliminarDescuento,
};
