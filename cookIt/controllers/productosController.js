let dbProductos = require('../data/dbProductos');
const fs = require('fs');

const db = require('../database/models'); //requiero la base de datos


module.exports = {

    view: (req, res) => { //metodo para visualizar productos
        let rol = undefined;
        let id = undefined;


        if (req.session.user != undefined) {
            let session = req.session.user;
            rol = session.rol;
            id = session.id;
        }

        db.Producto.findAll()
            .then(productos => {
                res.render('productsView', {
                    products: dbProductos,
                    productos: productos,
                    user: req.session.user,
                    rol: rol,
                    id: id
                })
            })

    },
    detail: function(req, res) {
        db.Producto.findOne({
                where: {
                    id: req.params.id
                },
                include: [{ association: "categoria" }]

            })
            .then(producto => {
                res.render('productDetail', {
                    user: req.session.user,
                    producto: producto
                })
            })
    }
}