//MODULOS REQUERIDOS
const express = require('express');
const productoController = require('../controllers/productosController');
const router = express.Router();

// const = require('../middlewares/sessionUserCheck');
const productMulter = require('../middlewares/productMulter');





//RUTAS
router.get('/details/:id', productoController.detail);

//nuevas rutas para trabajar con base de datos
router.get('/view', productoController.view);
router.get('/productDetail/:id', productoController.detail);


router.delete('/:id', upload.any(), productoController.borrar);


module.exports = router;