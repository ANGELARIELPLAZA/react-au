"use strict";
// Importar dependencias y modulos
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");
// Importar modelos
const Usuario = require("../models/UsuarioModel");
// Importar servicios
const jwt = require("../services/jwt");

// Importar servicios
const { validarUsuario } = require("../helpers/validacionUsuario");

const crearUsuario = async (req, res, next) => {
  let Data = req.body;
  const encryptedData = Data.data;
  const bytes = CryptoJS.AES.decrypt(encryptedData, "secret-key");
  let params = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  // Comprobar que me llegan bien (+ validacion)
  if (!params.name || !params.email || !params.password || !params.caja) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  try {
    const nombre = params.name;
    const email = params.email;
    const contrasena = params.password;
    const rol = params.rol;
    const caja = params.caja;

    // Validación avanzada
    try {
      validarUsuario({ nombre, email, contrasena, caja });
    } catch (error) {
      return res.status(200).json({
        status: "error",
        message: "Valición no superada",
      });
    }
    // Verificar si la propiedad 'contrasena' existe en 'req.body'
    if (!params.password) {
      throw new Error("Contraseña no proporcionada");
    }

    // Generar hash de la contraseña
    // Cifrar la contraseña
    let pwd = await bcrypt.hash(params.password, 10);
    params.password = pwd;
    // Si la validación es exitosa, crear el usuario
    const usuario = new Usuario({
      nombre,
      email,
      contrasena: params.password, // Guardar la contraseña encriptada en la base de datos
      rol,
      caja,
      habilitado: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await usuario.save();
    res
      .status(201)
      .json({ status: "success", mensaje: "Usuario creado exitosamente" });
  } catch (error) {
    // Si se produce un error de validación, enviar un mensaje de error y un estado al servidor
    if (error.code === 11000) {
      res
        .status(400)
        .json({ status: "ya_existe", mensaje: "El usuario ya existe" });
    } else {
      res.status(400).json({ status: "error", mensaje: error.message });
    }
    next();
  }
};

const login = async (req, res, next) => {
  // Recoger parametros body
  let params = req.body;
  // Comprobar que me llegan bien (+ validacion)
  if (!params.email || !params.password) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos",
    });
  }
  try {
    const email = params.email;
    const contrasena = params.password;

    // Buscar al usuario por correo electrónico
    const usuario = await Usuario.findOne({ email });
    // Si el usuario no existe, enviar  un mensaje de error y un estado al servidor
    if (!usuario) {
      return res.status(401).json({ mensaje: "Correo electrónico incorrecto" });
    }

    // Validar la contraseña del usuario
    const contrasenaValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena
    );
    if (!contrasenaValida) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    // Crear el token

    // Generar token
    const token = jwt.createToken(usuario);

    // Devolver datos del usuario
    return res.status(200).send({
      status: "success",
      message: "Te has identificado correctamente",
      user: {
        id: usuario._id,
        name: usuario.nombre,
        rol: usuario.rol,
        caja: usuario.caja,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al iniciar sesión" });
    next();
  }
};
const profile = async (req, res) => {
  // Recibir el parametro del id de usuario por la url
  const id = req.params.id;
  try {
    // Consulta para sacar los datos del usuario
    const userProfile = await Usuario.findById(id).select({
      password: 0,
    });

    //console.log(userProfile);
    if (!userProfile) {
      return res.status(404).send({
        status: "error",
        message: "El usuario no existe o hay un error",
      });
    }
    // Devolver el resultado
    return res.status(200).send({
      status: "success",
      user: userProfile,
    });
  } catch (error) {
    // Handle any errors that occur during the async operations
    return res.status(500).send({
      status: "error",
      message: "Ha ocurrido un error al procesar la solicitud",
    });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al listar los usuarios",
    });
  }
};

const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res
        .status(404)
        .json({ status: "success", mensaje: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al obtener el usuario",
    });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { nombre, email, contrasena, rol, habilitado, caja } = req.body;
    const { id } = req.params;
    // Verificar si el usuario a modificar es el usuario protegido
    if (id === "64416643c7895eacdb12d3ce") {
      return res.status(403).json({
        status: "error",
        mensaje: "No se puede modificar este usuario",
      });
    }

    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res
        .status(404)
        .json({ status: "error", mensaje: "Usuario no encontrado" });
    }

    // Update the usuario object with the new information
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.caja = caja;

    if (contrasena) {
      // If a new password is provided, encrypt it and set the new password
      let pwd = await bcrypt.hash(contrasena, 10);
      usuario.contrasena = pwd;
    }

    usuario.rol = rol;
    usuario.caja = caja;
    usuario.habilitado = habilitado;
    usuario.updatedAt = new Date();

    await usuario.save();

    res.json({
      status: "success",
      mensaje: "Usuario actualizado exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al actualizar el usuario",
    });
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    if (id === "64416643c7895eacdb12d3ce") {
      return res.status(403).json({
        status: "error",
        mensaje: "No se puede modificar este usuario",
      });
    }
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res
        .status(404)
        .json({ status: "error", mensaje: "Usuario no encontrado" });
    }

    await Usuario.deleteOne({ _id: id });

    res.json({ status: "success", mensaje: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Hubo un error al eliminar el usuario",
    });
  }
};

module.exports = {
  login,
  profile,
  listarUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
