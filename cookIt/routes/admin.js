//MODULOS REQUERIDOS
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const sessionCheck = require('../middlewares/sessionUserCheck');
const productMulter = require('../middlewares/productMulter');



//rutas administración de productos
router.get('/products', adminController.list);
router.get('/products/add', adminController.add);
router.post('/products/save', productMulter.any(), adminController.save);
router.get('/products/:id/edit', adminController.edit);
router.put('/products/:id', productMulter.any(), adminController.update)


//rutas administración de usuarios
//router.get('/users', adminController.users);


module.exports = router;