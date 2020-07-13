//MODULOS REQUERIDOS
const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();


//RUTAS
router.get('/registro', usuariosController.registro);


module.exports = router;