let productos = require('../data/dbProductos');

const mainController = {
    home: (req, res) => {
        res.render('home', { productos: productos })
    },
    carrito: (req, res) => {
        res.render('carrito', { productos: productos })
    }

}

module.exports = mainController;