let dbProductos = require('../data/dbProductos');
const fs = require('fs');

const db = require('../database/models'); //requiero la base de datos


module.exports = {

    view: (req, res) => { //metodo para visualizar productos
        db.Producto.findAll()
            .then(productos => {
                res.render('productsView', {
                    products: dbProductos,
                    productos: productos,
                    user: req.session.user,
                    titulo: "Nuestro amplio menú, solo para paladares exigentes",
                    categoria:""
                })
            })

    },
    detail: function(req, res) {

        db.Producto.findOne({
                where: {
                    id: req.params.id
                },
                include: [{ association: "categoria" }, "vinos"],
                //include: ["vinos"]

            })
            .then(producto => {
                let aptos = [];
                let sodio;
                let celiaco;
                let vegano;
                if (producto.apto.length != 0) {
                    aptos = producto.apto.split(',')
                }
                aptos.forEach(apto => {
                    if (apto == "sodio") {
                        sodio = "bajo en sodio"
                    }
                    if (apto == "celiaco") {
                        celiaco = "sin TAAC"
                    }
                    if (apto == "vegano") {
                        vegano = "dieta vegana"
                    }
                });
                let fotos = producto.imagenes.split(',');

                res.render('productDetail', {
                    user: req.session.user,
                    producto: producto,
                    sodio: sodio,
                    celiaco: celiaco,
                    vegano: vegano,
                    fotos: fotos,
                    vinos: producto.vinos
                })
            })
    },
    category: function(req, res) {
        db.Producto.findAll({
                where: {
                    idCategory: req.params.id
                },
                include: [{ association: "categoria" }]
            })
            .then(productos => {
                let categoria = productos[0].categoria.nombre;
               
                res.render('productsView', {
                    user: req.session.user,
                    productos: productos,
                    titulo: "Nuestro amplio menú de comida " + categoria,
                    categoria:categoria

                })
            })


    }
}