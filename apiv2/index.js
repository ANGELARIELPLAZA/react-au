'use strict'

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const { connectDB } = require("./utils/db");
const loggerMiddleware = require("./middlewares/logger");
// Cargar conf rutas
const UsuariosRouter = require("./routes/UsuariosRoute");
const RutasRouter = require("./routes/RutasRoute");
const VentasRouter = require("./routes/VentaRoute");
const DescuentosRouter = require("./routes/DescuentosRoute");

const app = express();
const PORT = 3000;

// Conectarse a la base de datos
connectDB();
// Configurar cors
app.use(cors());

// Agregar middleware de registro de solicitudes
// Anidar los middleware de registro en uno solo
app.use(loggerMiddleware.requestLogger);
app.use(loggerMiddleware.errorLogger);
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
// routes
app.use("/api/usuarios", UsuariosRouter);
app.use("/api/rutas", RutasRouter);
app.use("/api/descuentos", DescuentosRouter);
app.use("/api/ventas", VentasRouter);


// Configurar el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
     user: "centralitsmo@gmail.com",
     pass: "angelariel74"
  }
});

// Ruta principal
app.get("/", (req, res) => {
  // Crear las opciones del correo electrónico
  const mailOptions = {
    from: "centralitsmo@gmail.com",
    to: "anllelo13.plaza@gmail.com",
    subject: "Nodemailer Test",
    html: "Test <button>sending</button> Gmail using Node JS"
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.send("Error al enviar el correo electrónico");
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.send("¡Correo electrónico enviado!");
    }
  });
});

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Hubo un error en el servidor");
});
// Iniciar la aplicación
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
