//MODULOS
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//MIDDELWARES
const productMulter = require('../middlewares/productMulter');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const adminCheck = require('../middlewares/adminCheck');
const productosController = require('../controllers/productosController');

//rutas administración de productos
router.get('/products', adminCheck, adminController.list);
router.get('/products/add', adminCheck, adminController.add);
router.post('/products/save', adminCheck, productMulter.any(), adminController.save);
router.get('/products/:id/edit', adminCheck, adminController.edit);
router.put('/products/detail/:id', adminCheck, productMulter.any(), adminController.update);
router.delete('/products/:id', adminController.delete);



//rutas administración de usuarios
router.get('/users', adminCheck, adminController.listarUsuarios);


module.exports = router;