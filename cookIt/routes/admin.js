//MODULOS REQUERIDOS
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const sessionCheck = require('../middlewares/sessionUserCheck');
const productMulter = require('../middlewares/productMulter');



//rutas administración de productos
router.get('/products', sessionCheck, adminController.products);
router.get('/products/:id/edit', sessionCheck, adminController.editProduct);



//rutas administración de usuarios
//router.get('/users', adminController.users);


module.exports = router;