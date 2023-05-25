"use strict";
const Venta = require("../models/VentaModel");
const moment = require("moment");

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
    const ventasPrimerTurno = [];
    const ventasSegundoTurno = [];

    const data = moment().utc(true).toDate();
    // Formatear la fecha en el formato deseado
    var fecha = data.toLocaleDateString();
    const fechaActual = moment(data).format("DD/M/YYYY");
    const ventas = await Venta.find({
      vendedor: req.params.vendedor,
      fecha: fechaActual,
    });
    const ventasMismoDia = [];
    let ventaFecha = "";

    for (let i = 0; i < ventas.length; i++) {
      ventaFecha = ventas[i].fecha;
      if (ventaFecha === fecha) {
        const horaVenta = moment(ventas[i].hora, "HH:mm:ss").format("HH");
        if (horaVenta >= 5 && horaVenta < 14) {
          ventasPrimerTurno.push(ventas[i]);
        } else if (horaVenta >= 14 && horaVenta <= 23) {
          ventasSegundoTurno.push(ventas[i]);
        }
        ventasMismoDia.push(ventas[i]);
      }
    }
    // Ordenar por hora de menor a mayor
    ventasPrimerTurno.sort((a, b) => {
      const horaA = a.hora.split(":");
      const horaB = b.hora.split(":");
      const minutosA = parseInt(horaA[0]) * 60 + parseInt(horaA[1]);
      const minutosB = parseInt(horaB[0]) * 60 + parseInt(horaB[1]);
      return minutosB - minutosA;
    });
    ventasSegundoTurno.sort((a, b) => {
      const horaA = a.hora.split(":");
      const horaB = b.hora.split(":");
      const minutosA = parseInt(horaA[0]) * 60 + parseInt(horaA[1]);
      const minutosB = parseInt(horaB[0]) * 60 + parseInt(horaB[1]);
      return minutosB - minutosA;
    });
    res.json({ ventasSegundoTurno, ventasPrimerTurno });
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
    const data = moment().utc(true).toDate();
    // Formatear la fecha en el formato deseado
    var fecha = data.toLocaleDateString();
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
    const ventasPrimerTurno = [];
    const ventasSegundoTurno = [];
    const resultadoFinalTurno1 = [];
    const resultadoFinalTurno2 = [];

    const data = moment().utc(true).toDate();
    // Formatear la fecha en el formato deseado
    var fecha = data.toLocaleDateString();
    const fechaActual = moment(data).format("DD/M/YYYY");
    const ventas = await Venta.find({
      vendedor: req.params.vendedor,
      fecha: fechaActual,
    });
    let ventaFecha = "";
    for (let i = 0; i < ventas.length; i++) {
      ventaFecha = ventas[i].fecha;
      if (ventaFecha === fecha) {
        const horaVenta = moment(ventas[i].hora, "HH:mm:ss").format("HH");
        if (horaVenta >= 5 && horaVenta < 14) {
          ventasPrimerTurno.push(ventas[i]);
        } else if (horaVenta >= 14 && horaVenta <= 23) {
          ventasSegundoTurno.push(ventas[i]);
        }
      }
    }

    // Sumar número de boletos por ruta
    const ventasPorRutaTurno1 = {};
    for (let i = 0; i < ventasPrimerTurno.length; i++) {
      const venta = ventasPrimerTurno[i];
      if (venta.nombre_ruta in ventasPorRutaTurno1) {
        ventasPorRutaTurno1[venta.nombre_ruta] += parseInt(venta.num_boletos);
      } else {
        ventasPorRutaTurno1[venta.nombre_ruta] = parseInt(venta.num_boletos);
      }
    }
    // Sumar número de boletos por ruta
    const ventasPorRutaTurno2 = {};
    for (let i = 0; i < ventasSegundoTurno.length; i++) {
      const venta = ventasSegundoTurno[i];
      if (venta.nombre_ruta in ventasPorRutaTurno2) {
        ventasPorRutaTurno2[venta.nombre_ruta] += parseInt(venta.num_boletos);
      } else {
        ventasPorRutaTurno2[venta.nombre_ruta] = parseInt(venta.num_boletos);
      }
    }
    // Convertir a formato deseado
    for (const nombre_ruta in ventasPorRutaTurno1) {
      resultadoFinalTurno1.push({
        nombre_ruta,
        total_boletos: ventasPorRutaTurno1[nombre_ruta],
      });
    }
    for (const nombre_ruta in ventasPorRutaTurno2) {
      resultadoFinalTurno2.push({
        nombre_ruta,
        total_boletos: ventasPorRutaTurno2[nombre_ruta],
      });
    }
    res.json({ resultadoFinalTurno1, resultadoFinalTurno2 });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al obtener las ventas",
    });
  }
};
const crearVenta = async (req, res, next) => {
  try {
    const ventas = req.body;
    if (!Array.isArray(ventas) || ventas.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "No se encontraron datos de venta válidos",
      });
    }

    const ventasCreadas = [];
    for (const venta of ventas) {
      const {
        code,
        num_boleto,
        descuento,
        token,
        vendedor,
        destino,
        total,
        caja,
        totalventa,
        fecha,
        hora,
      } = venta;

      if (
        !code ||
        !num_boleto ||
        !descuento ||
        !token ||
        !vendedor ||
        !destino ||
        !total ||
        !caja ||
        !totalventa ||
        !fecha ||
        !hora
      ) {
        return res.status(400).json({
          status: "error",
          message: "Faltan datos en la venta",
        });
      }

      const ventaNueva = new Venta({
        destino_code: code,
        descuento,
        token,
        vendedor,
        nombre_ruta: destino,
        total,
        totalventa,
        caja,
        fecha,
        hora,
      });

      const ventaGuardada = await ventaNueva.save();
      ventasCreadas.push(ventaGuardada);
    }

    res.status(201).json({
      status: "success",
      mensaje: "Ventas creadas exitosamente",
      ventas: ventasCreadas,
    });
  } catch (error) {
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
