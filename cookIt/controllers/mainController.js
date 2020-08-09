let productos = require('../data/dbProductos');
let usuarios = require('../data/dbUsers')
let verifyUser = require('../validations/verifyUser')

const mainController = {
    home: (req, res) => {
        verifyUser(req, res);
        res.render('home', {
            productos: productos,
            session: session,
            rol: rol
        })
    },
    carrito: (req, res) => {
        res.render('carrito', { productos: productos })
    }

}

module.exports = mainController;