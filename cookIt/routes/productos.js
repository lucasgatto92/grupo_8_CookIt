//MODULOS REQUERIDOS
const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productosController');


// const = require('../middlewares/sessionUserCheck');
const productMulter = require('../middlewares/productMulter');





//RUTAS
router.get('/details/:id', productoController.detail);

//nuevas rutas para trabajar con base de datos
router.get('/view', productoController.view);
router.get('/productDetail/:id', productoController.detail);




module.exports = router;