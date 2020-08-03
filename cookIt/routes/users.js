//MODULOS REQUERIDOS
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const avatarMulter = require('../middlewares/avatarMulter');

const { check, validationResult, body } = require('express-validator'); //REQUIERO EXPRESS VALIDATOR



//RUTAS
router.get('/listado', usersController.listado);

router.get('/login', usersController.login);

router.get('/registro', usersController.registro);

router.post('/registro', avatarMulter.any(), usersController.guardar);

router.post('/login', [
        check('email')
        .isEmpty()
        .isEmail(),
        check('password')
        .isEmpty()
    ],
    usersController.processLogin);


module.exports = router;