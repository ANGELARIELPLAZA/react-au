'use strict'

const express = require("express");
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
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
