const express = require('express');
const cargaController = require('../controllers/cargaController');
const router = express.Router();


//RUTAS
router.get('/', cargaController.carga)


module.exports = router;