'use strict'
const express = require('express');
const router = express.Router();
const DescuentosController = require('../controllers/DescuentoController');
const check = require('../middlewares/auth')

router.get('/list', check.auth,  DescuentosController.listarDescuentos);
router.get('/list/:id', check.auth,  DescuentosController.obtenerDescuento);
router.post('/creat', check.auth,  DescuentosController.crearDescuento);
router.put('/:id', check.auth,  DescuentosController.actualizarDescuento);
router.delete('/:id', check.auth, DescuentosController.eliminarDescuento);

module.exports = router;
