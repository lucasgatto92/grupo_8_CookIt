//MODULOS REQUERIDOS
const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

const sessionCheck = require('../middlewares/sessionUserCheck');


//RUTAS
router.get('/', mainController.home);
router.get('/carrito', mainController.carrito)
router.get('/checkOut', mainController.checkOut)


module.exports = router;