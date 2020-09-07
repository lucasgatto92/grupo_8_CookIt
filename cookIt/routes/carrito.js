//MODULOS
const express = require('express');
const carritoController = require('../controllers/carritoController');
const router = express.Router();

//MIDDELWARES
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const gurdaUrl = require('../middlewares/guardaUrl');
const guardaUrl = require('../middlewares/guardaUrl');


//RUTAS

router.get('/',sessionUserCheck,carritoController.carrito);
router.get('/eliminarProducto/:id',sessionUserCheck,carritoController.eliminar);
router.get('/agregarProducto/:idUser?/:idProduct?', guardaUrl, carritoController.agregar);
router.get('/finalizaCompra/:idUser?/:idProduct?', sessionUserCheck, carritoController.finalizar);




module.exports = router;