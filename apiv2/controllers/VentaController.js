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

const corteVentas = async (req, res) => {
  try {
    const { vendedor } = req.params;
    const today = new Date().toISOString().slice(0, 10);
    const ventas = await Venta.aggregate([
      {
        $match: {
          vendedor,
          $expr: {
            $and: [
              {
                $gte: [
                  {
                    $dateFromString: {
                      dateString: "$created_at",
                      format: "%Y-%m-%d/%H:%M:%S"
                    }
                  },
                  new Date(`${today}T00:00:00Z`)
                ]
              },
              {
                $lte: [
                  {
                    $dateFromString: {
                      dateString: "$created_at",
                      format: "%Y-%m-%d/%H:%M:%S"
                    }
                  },
                  new Date(`${today}T23:59:59Z`)
                ]
              }
            ]
          }
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
        },
      },
      {
        $project: {
          _id: 0,
          nombre_ruta: "$_id",
          total_boletos: "$total_boletos",
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
      created_at: moment(new Date()).tz("America/Mexico_City").format("YYYY-MM-DD/HH:mm:ss"),
    });

    await ventaNueva.save();

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
  obtenerVenta,
  crearVenta,
};
