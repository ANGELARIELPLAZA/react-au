'use strict'
const express = require('express');
const router = express.Router();
const VentasController = require('../controllers/VentaController');
const check = require('../middlewares/auth')

router.get('/list', check.auth,  VentasController.listarVentas);
router.get('/corte/general', check.auth,  VentasController.corteVentasGeneral);
router.get('/corte/:vendedor', check.auth,  VentasController.corteVentas);
router.get('/vendedor/:vendedor', check.auth,  VentasController.obtenerVenta);
router.post('/creat',  check.auth,  VentasController.crearVenta);

module.exports = router;
