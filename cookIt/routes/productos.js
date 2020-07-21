//MODULOS REQUERIDOS
const express = require('express');
const productoController = require('../controllers/productosController');
const router = express.Router();
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/images/products')
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage });


//RUTAS
router.get('/', productoController.listar);
router.get('/create', productoController.agregar);
router.get('/details/:id', productoController.detalle);
router.get('/:id/edit', productoController.editar);

router.post('/', upload.any(), productoController.guardar);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.borrar);


module.exports = router;