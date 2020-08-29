let dbUsuarios = require('../data/dbUsers');
let dbProducts = require('../data/dbProducts');
let dbProductos = require('../data/dbProductos');
let render = require('../functions/render')

const mainController = {
    home: (req, res) => {
        res.render('home', {
            dbUsuarios: dbUsuarios,
            productos: dbProducts,
            products: dbProductos,
            user: req.session.user,
            rol: "admin",
            id: undefined
        })

    },
    carrito: (req, res) => {
        res.render('carrito')

        //res.render('carrito', { productos: productos })
    },
    checkOut: (req, res) => {
        res.render('checkOut')
    }

}

module.exports = mainController;