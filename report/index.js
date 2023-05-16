"use strict";

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./utils/db");
const loggerMiddleware = require("./middlewares/logger");
const Venta = require("./models/VentaModel");
const fs = require("fs");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = 3002;

// Token de tu bot de Telegram
const token = "5794982756:AAERRwcogLqM71Ripxx5v1TKFdqrw-4xtsk";
// ID del chat donde se enviarán los documentos
const chatId = "5129547428";

// Crea una instancia del bot
const bot = new TelegramBot(token, { polling: true });

function obtenerHoraActual() {
  const fechaActual = new Date();
  return fechaActual.getHours() + ":" + fechaActual.getMinutes();
}

async function generarJSON() {
  const data = await Venta.find();
  const jsonData = JSON.stringify(data);
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();
  const rutaDocumento = `./data/ventas-${anio}-${mes}-${dia}.json`;
  fs.writeFileSync(rutaDocumento, jsonData);
  console.log("Reporte generado a las", obtenerHoraActual());
}

function enviarDocumento(rutaDocumento, nombreDocumento) {
  bot
    .sendDocument(chatId, rutaDocumento, {
      caption: nombreDocumento,
    })
    .then(() => {
      console.log("Documento enviado a las", obtenerHoraActual());
    })
    .catch((error) => {
      console.error("Error al enviar el documento:", error);
    });
}

async function enviarJSON() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();
  const rutaDocumento = `./data/ventas-${anio}-${mes}-${dia}.json`;
  const nombreDocumento = `ventas-${anio}-${mes}-${dia}_${hora}-${minutos}-${segundos}.json`;

  enviarDocumento(rutaDocumento, nombreDocumento);
}

// Generar el archivo JSON cada 29 minutos
setInterval(generarJSON, 58 * 60 * 1000);

// Enviar el archivo JSON cada hora con 15 segundos de tolerancia
setInterval(enviarJSON, 59 * 60 * 1000);

function calcularTiempoSiguienteHora() {
  const fechaActual = new Date();
  const minutosRestantes = 60 - fechaActual.getMinutes();
  const segundosRestantes = minutosRestantes * 30;
  const tiempoRestante = segundosRestantes * 1000;
  console.log(minutosRestantes * 1);

  return tiempoRestante;
}

app.use(cors());
app.use(loggerMiddleware.requestLogger);
app.use(loggerMiddleware.errorLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/generar", async (req, res, next) => {
  generarJSON();
  next();
});

app.get("/", async (req, res, next) => {
  enviarJSON();
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Hubo un error en el servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
