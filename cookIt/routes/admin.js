//MODULOS
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//MIDDELWARES
const productMulter = require('../middlewares/productMulter');

//VALIDATIONS
const userCheck = require('../validations/userCheck')


//rutas administración de productos
router.get('/products', userCheck, adminController.list);
router.get('/products/add', userCheck, adminController.add);
router.post('/products/save', userCheck, productMulter.any(), adminController.save);
router.get('/products/:id/edit', userCheck, adminController.edit);
router.put('/products/:id', userCheck, productMulter.any(), adminController.update)


//rutas administración de usuarios
router.get('/users', adminController.listarUsuarios);
router.get('/users/perfil/:id', adminController.perfilUsuario);


module.exports = router;