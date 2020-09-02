//MODULOS REQUERIDOS
const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

//MIDDLEWARES
const sessionUserCheck = require('../middlewares/sessionUserCheck');


//VALIDATIONS


//RUTAS
router.get('/', mainController.home);
router.get('/carrito', sessionUserCheck, mainController.carrito);
router.get('/checkOut', mainController.checkOut);
router.get('/buscador',mainController.buscador);



module.exports = router;