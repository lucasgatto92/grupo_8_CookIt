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
        console.log(`usuario: ${req.params.idUser} - producto ${req.params.idProduct}` )
        if(req.params.idUser && req.params.idProduct){
        db.Producto.findOne({
            where:{
                id:req.params.idProduct
            }
        })
        .then(result=>{
            let compra = {
                idUser : req.session.user.id,
                idProduct : Number(req.params.idProduct),
                producto: result.dataValues
            }
            req.session.carrito.push(compra)
           
            console.log(req.session.carrito);
      
            res.render('carrito', {
                user: req.session.user,
                carrito : req.session.carrito
            })
        })
    }else{
        res.render('carrito', {
            user: req.session.user,
            carrito : req.session.carrito
        })
    }

    },
    editarCarrito:(req,res)=>{

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
            let titulo = "Lo que tenemos para vos...";
            if(result == ""){
                titulo = "Lo sentimos, hoy no tenemos lo que deseas..."
            }
            res.render('productsView', {
                productos: result,
                user: req.session.user,
                titulo: titulo,
                categoria:" "
            })
        })
    },
    checkOut: (req, res) => {
        res.render('checkOut',{
            user:req.session.user
        })
    }

}

module.exports = mainController;