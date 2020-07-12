//MODULOS REQUERIDOS
const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();


//RUTAS
router.get('/', mainController.home);
router.get('/carrito', mainController.carrito)


module.exports = router;