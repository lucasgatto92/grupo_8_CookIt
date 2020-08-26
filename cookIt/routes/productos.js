//MODULOS REQUERIDOS
const express = require('express');
const productoController = require('../controllers/productosController');
const router = express.Router();

const sessionCheck = require('../middlewares/sessionUserCheck');
const productMulter = require('../middlewares/productMulter');





//RUTAS
router.get('/', productoController.listar);
router.get('/create', sessionCheck, productoController.agregar);
router.get('/details/:id', sessionCheck, productoController.detalle);
router.get('/:id/edit', sessionCheck, productoController.editar);

//nuevas rutas para trabajar con base de datos
router.get('/add', productoController.add);
router.post('/save', productMulter.any(), productoController.save);
router.get('/view', productoController.view);
router.get('/productDetail/:id', sessionCheck, productoController.detalle);


router.post('/', upload.any(), productoController.guardar);
router.put('/:id', upload.any(), productoController.actualizar);
router.delete('/:id', upload.any(), productoController.borrar);


module.exports = router;