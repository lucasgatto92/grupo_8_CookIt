//MODULOS REQUERIDOS
const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();


//RUTAS
router.get('/listado', usersController.listado);
router.get('/registro', usersController.registro);


module.exports = router;