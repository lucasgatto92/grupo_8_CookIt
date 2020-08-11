let productos = require('../data/dbProductos');
let usuarios = require('../data/dbUsers')
let verifyUser = require('../validations/verifyUser')

const mainController = {
    home: (req, res) => {
        let session = verifyUser(req, res);
        let rol = undefined
        if (session != undefined) {
            rol = session.rol;
        }
        console.log(rol)

        res.render('home', {
            productos: productos,
            user: session,
            rol: rol
        })
    },
    carrito: (req, res) => {
        res.render('carrito', { productos: productos })
    }

}

module.exports = mainController;