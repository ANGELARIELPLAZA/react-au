"use strict";
const Venta = require("../models/VentaModel");
const { validarVenta } = require("../helpers/validacionVenta");
var fechaActual = new Date();
// Obtener solo la fecha en formato legible
var fecha = fechaActual.toLocaleDateString();
// Obtener solo la hora en formato legible
var hora = fechaActual.toLocaleTimeString();

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
    const ventasMismoDia = [];
    let ventaFecha = "";
    for (let i = 0; i < ventas.length; i++) {
      ventaFecha = ventas[i].fecha;
      if (ventaFecha === fecha) {
        ventasMismoDia.push(ventas[i]);
      }
    }
    // Ordenar por hora de menor a mayor
    ventasMismoDia.sort((a, b) => {
      const horaA = a.hora.split(":");
      const horaB = b.hora.split(":");
      const minutosA = parseInt(horaA[0]) * 60 + parseInt(horaA[1]);
      const minutosB = parseInt(horaB[0]) * 60 + parseInt(horaB[1]);
      return minutosB - minutosA;
    });
    
    res.json(ventasMismoDia);
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
    const ventas = await Venta.find();
    const ventasMismoDia = [];
    let ventaFecha = "";
    for (let i = 0; i < ventas.length; i++) {
      ventaFecha = ventas[i].fecha;
      if (ventaFecha === fecha) {
        ventasMismoDia.push(ventas[i]);
      }
    }
    // Ordenar por hora de menor a mayor
    ventasMismoDia.sort((a, b) => {
      const horaA = a.hora.split(":");
      const horaB = b.hora.split(":");
      const minutosA = parseInt(horaA[0]) * 60 + parseInt(horaA[1]);
      const minutosB = parseInt(horaB[0]) * 60 + parseInt(horaB[1]);
      return minutosB - minutosA;
    });

    res.json(ventasMismoDia);
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
    const ventas = await Venta.find({ vendedor: req.params.vendedor });
    // Filtrar ventas del mismo día
    const ventasMismoDia = [];
    let ventaFecha = "";
    for (let i = 0; i < ventas.length; i++) {
      ventaFecha = ventas[i].fecha;
      if (ventaFecha === fecha) {
        ventasMismoDia.push(ventas[i]);
      }
    }
    // Sumar número de boletos por ruta
    const ventasPorRuta = {};
    for (let i = 0; i < ventasMismoDia.length; i++) {
      const venta = ventasMismoDia[i];
      if (venta.nombre_ruta in ventasPorRuta) {
        ventasPorRuta[venta.nombre_ruta] += parseInt(venta.num_boletos);
      } else {
        ventasPorRuta[venta.nombre_ruta] = parseInt(venta.num_boletos);
      }
    }

    // Convertir a formato deseado
    const resultadoFinal = [];
    for (const nombre_ruta in ventasPorRuta) {
      resultadoFinal.push({
        nombre_ruta,
        total_boletos: ventasPorRuta[nombre_ruta],
      });
    }

    res.json(resultadoFinal);
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
      fecha: fecha,
      hora: hora,
    });
    //ventaNueva.created_at = ventaNueva.created_at.replace(" ", ", ");//opcion solo para pc
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
  corteVentasGeneral,
  obtenerVenta,
  crearVenta,
};
