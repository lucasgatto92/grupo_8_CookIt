//MODULOS REQUERIDOS
const express = require('express');
const productoController = require('../controllers/productoController');
const router = express.Router();


//RUTAS
router.get('/detalle', productoController.detalle)


module.exports = router;