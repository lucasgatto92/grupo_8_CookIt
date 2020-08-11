let productos = require('../data/dbProductos');
let usuarios = require('../data/dbUsers')
let render = require('../functions/render')

const mainController = {
    home: (req, res) => {
        render(req, res, 'home')
    },
    carrito: (req, res) => {
        render(req, res, 'carrito')

        //res.render('carrito', { productos: productos })
    }

}

module.exports = mainController;