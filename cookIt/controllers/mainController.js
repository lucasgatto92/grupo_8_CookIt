let dbProducts = require('../data/dbProducts');
let dbProductos = require('../data/dbProductos');

const db = require('../database/models'); //requiero la base de datos


const mainController = {
    home: (req, res) => {
        let producto = db.Producto.findByPk(req.params.id, { include: [{ association: "categoria" }] });
        let categorias = db.Categoria.findAll();

        Promise.all([producto, categorias])
            .then(function([producto, categorias]) {

                res.render('home', {
                    producto: producto,
                    categorias: categorias,
                    user: req.session.user,
                    productos: dbProducts,
                    products: dbProductos,

                })
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