//MODULOS REQUERIDOS
const express = require('express');
const productoController = require('../controllers/productosController');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const sessionCheck = require('../middlewares/sessionUserCheck');


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
router.get('/create', sessionCheck, productoController.agregar);
router.get('/details/:id', sessionCheck, productoController.detalle);
router.get('/:id/edit', sessionCheck, productoController.editar);

router.post('/', upload.any(), productoController.guardar);
router.put('/:id', upload.any(), productoController.actualizar);
router.delete('/:id', upload.any(), productoController.borrar);


module.exports = router;