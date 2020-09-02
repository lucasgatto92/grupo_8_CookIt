let dbProducts = require('../data/dbProducts');
let dbProductos = require('../data/dbProductos');

const db = require('../database/models'); //requiero la base de datos
const { Op } = require('sequelize');

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
    buscador:(req,res) =>{
        let buscar = req.query.buscar;
        db.Producto.findAll({
            where: {
                nombre:{
                    [Op.substring]:buscar
                }
            },
            include: [{ association: "categoria" }]
        })
        .then(result =>{
            res.render('productsView', {
                productos: result,
                user: req.session.user,
                titulo: "Lo que tenemos para vos..."
            })
        })
    },
    checkOut: (req, res) => {
        res.render('checkOut')
    }

}

module.exports = mainController;