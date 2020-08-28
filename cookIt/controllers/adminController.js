let dbProductos = require('../data/dbProductos');
const fs = require('fs');
const render = require('../functions/render')

const db = require('../database/models');

module.exports = {

    products: (req, res) => {
        let rol = undefined;
        let id = undefined;


        if (req.session.user != undefined) {
            let session = req.session.user;
            rol = session.rol;
            id = session.id;
        }
        db.Producto.findAll()
            .then(productos => {
                res.render('listarProductos', {
                    productos: productos,
                    user: req.session.user,
                    rol: rol,
                    id: id
                })
            })
    },
    editProduct: (req, res) => {
        let rol = undefined;
        let id = undefined;


        if (req.session.user != undefined) {
            let session = req.session.user;
            rol = session.rol;
            id = session.id;
        }

        db.Producto.findByPk(req.params.id)
            .then(producto => {

                res.render('editarProducto', {
                    producto: producto,
                    user: req.session.user,
                    rol: rol,
                    id: id
                })
            })
    }
}