"use strict";
const Venta = require("../models/VentaModel");
const { validarVenta } = require("../helpers/validacionVenta");
const moment = require("moment"); // Importar Moment.js

const listarVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al listar las ventas" });
  }
};

const obtenerVenta = async (req, res) => {
  try {
    const ventas = await Venta.find({ vendedor: req.params.vendedor });
    if (!ventas) {
      return res
        .status(404)
        .json({ status: "error", mensaje: "venta no encontrado" });
    }
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al obtener las ventas",
    });
  }
};

const corteVentasGeneral = async (req, res) => {
  try {
    const now = new Date(new Date().getTime() - 60 * 60 * 1000).toLocaleString(
      "es-MX",
      {
        timeZone: "America/Mexico_City",
        hour12: false,
      }
    );
    const today = now.replace(/(\d+)\/(\d+)\/(\d+)\s.*/, "$1/$2/$3");
    const ventas = await Venta.find({
      created_at: {
        $gte: `${today} 00:00:00Z`,
        $lte: `${today} 23:00:00Z`,
      },
    });
    if (!ventas) {
      return res
        .status(404)
        .json({ status: "error", mensaje: "venta no encontrado" });
    }
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al obtener las ventas",
    });
  }
};
const corteVentas = async (req, res) => {
  try {
    const { vendedor } = req.params;

    const now = new Date(new Date().getTime() - 60 * 60 * 1000).toLocaleString(
      "es-MX",
      {
        timeZone: "America/Mexico_City",
        hour12: false,
      }
    );
    const today = now.replace(/(\d+)\/(\d+)\/(\d+)\s.*/, "$1/$2/$3");
    const ventas = await Venta.aggregate([
      {
        $match: {
          vendedor,
          created_at: {
            $gte: `${today} 00:00:00Z`,
            $lte: `${today} 23:00:00Z`,
          },
        },
      },
      {
        $addFields: {
          num_boletos: { $toInt: "$num_boletos" },
        },
      },
      {
        $group: {
          _id: "$nombre_ruta",
          total_boletos: { $sum: "$num_boletos" },
          total_venta: { $sum: "$totalventa" },
        },
      },
      {
        $project: {
          _id: 0,
          nombre_ruta: "$_id",
          total_boletos: "$total_boletos",
          total_venta: "$total_venta",
          vendedor: "$vendedor",
        },
      },
    ]);
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al obtener las ventas",
    });
  }
};
const crearVenta = async (req, res, next) => {
  let params = req.body;
  params.num_boletos = "1";
  if (
    !params.destino_code ||
    !params.num_boletos ||
    !params.descuento ||
    !params.token ||
    !params.vendedor ||
    !params.nombre_ruta ||
    !params.total ||
    !params.caja ||
    !params.totalventa
  ) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  try {
    const destino_code = params.destino_code;
    const num_boletos = params.num_boletos;
    const descuento = params.descuento;
    const token = params.token;
    const vendedor = params.vendedor;
    const nombre_ruta = params.nombre_ruta;
    const total = params.total;
    const caja = params.caja;
    const totalventa = params.totalventa;
    try {
      // Validar la venta

      validarVenta({
        destino_code,
        num_boletos,
        descuento,
        token,
        vendedor,
        nombre_ruta,
        descuento,
        total,
        caja,
        totalventa,
      });
    } catch (error) {
      return res.status(200).json({
        status: "error",
        message: "Valición no superada",
      });
    }

    // Si la validación es exitosa, crear la venta
    const ventaNueva = new Venta({
      destino_code,
      num_boletos,
      descuento,
      token,
      vendedor,
      nombre_ruta,
      total,
      totalventa,
      caja,
      created_at: new Date(new Date().getTime() - 60 * 60 * 1000)
        .toLocaleString("es-MX", {
          timeZone: "America/Mexico_City",
          hour12: false,
        })
        .slice(0, 20),
    });
    console.log(ventaNueva.created_at);
    const nuevaFecha = ventaNueva.created_at.replace(",", "");

    await nuevaFecha.save();

    res
      .status(201)
      .json({ status: "success", mensaje: "Venta creada exitosamente" });
  } catch (error) {
    // Si se produce un error de validación, enviar un mensaje de error y un estado al servidor
    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ status: "error", mensaje: "Error en el servidor" });
    } else if (error.code === 11000) {
      res.status(400).json({ status: "error", mensaje: "La venta ya existe" });
    } else {
      res
        .status(500)
        .json({ status: "error", mensaje: "Hubo un error al crear la venta" });
    }
    next();
  }
};

module.exports = {
  listarVentas,
  corteVentas,
  corteVentasGeneral,
  obtenerVenta,
  crearVenta,
};
