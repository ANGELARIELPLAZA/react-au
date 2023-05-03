'use strict'
const express = require('express');
const router = express.Router();
const RutaController = require('../controllers/RutaController');
const check = require('../middlewares/auth')

router.get('/list', check.auth,  RutaController.listarRutas);
router.get('/list/:id', check.auth,  RutaController.obtenerRuta);
router.post('/creat',  check.auth,  RutaController.crearRuta);
router.put('/:id', check.auth,  RutaController.actualizarRuta);
router.delete('/:id', check.auth, RutaController.eliminarRuta);

module.exports = router;
