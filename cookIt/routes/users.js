//MODULOS REQUERIDOS
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const avatarMulter = require('../middlewares/avatarMulter');



//RUTAS
router.get('/listado', usersController.listado);

router.get('/login', usersController.login);

router.get('/registro', usersController.registro);

router.post('/registro', avatarMulter.any(), usersController.guardar);


module.exports = router;