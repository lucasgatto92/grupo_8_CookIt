const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        if (file.fieldname == "images") {
            callback(null, 'public/images/products')
        }
        if (file.fieldname == "receta") {
            callback(null, 'public/products/recetas')
        }
    },
    filename: function(req, file, callback) {
        if (file.fieldname == "images") {
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
        if (file.fieldname == "receta") {
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

        }
    }
})

module.exports = upload = multer({ storage: storage });