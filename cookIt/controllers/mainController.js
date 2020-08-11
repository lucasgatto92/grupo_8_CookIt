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
    },
    checkOut: (req, res) => {
        render(req, res, 'checkOut')
    }

}

module.exports = mainController;