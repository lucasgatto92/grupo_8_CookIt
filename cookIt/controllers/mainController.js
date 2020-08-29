let dbUsuarios = require('../data/dbUsers');
let dbProducts = require('../data/dbProducts');
let dbProductos = require('../data/dbProductos');

const mainController = {
    home: (req, res) => {
        res.render('home', {
            dbUsuarios: dbUsuarios,
            productos: dbProducts,
            products: dbProductos,
            user: req.session.user
        })

    },
    carrito: (req, res) => {
        res.render('carrito', {
            user: req.session.user
        })

    },
    checkOut: (req, res) => {
        res.render('checkOut')
    }

}

module.exports = mainController;