//MODULOS REQUERIDOS
const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

//MIDDLEWARES


//VALIDATIONS
const sessionUserCheck = require('../validations/sessionUserCheck');


//RUTAS
router.get('/', mainController.home);
router.get('/carrito', sessionUserCheck, mainController.carrito)
router.get('/checkOut', mainController.checkOut)


module.exports = router;