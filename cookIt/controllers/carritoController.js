const Swal = require('sweetalert2')
const db = require('../database/models'); //requiero la base de datos

const mainController = {
    carrito:(req,res)=>{
        res.render('carrito', {
            user: req.session.user,
            carrito : req.session.carrito
        })
    },
   agregar:(req,res)=>{
    db.Producto.findOne({
        where:{
            id:req.params.idProduct
        }
    })
    .then(result=>{
    req.session.carrito.forEach(item => {
            if(item.producto.id == req.params.idProduct){
                item.cantidad += 1;
                res.redirect('/productos/productDetail/'+req.params.idProduct)

            }
        });

        let compra = {
            idUser : req.session.user.id,
            idProduct : Number(req.params.idProduct),
            cantidad: 1,
            producto: result.dataValues
        }
        req.session.carrito.push(compra)
        console.log(req.session.carrito)

        res.redirect('/productos/productDetail/'+req.params.idProduct)

    })

   },
    finalizar: (req, res) => {
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
                 
            res.render('carrito', {
                user: req.session.user,
                carrito : req.session.carrito
            })
        })
    }

    },
    eliminar:(req,res)=>{
        let idProducto = req.params.id;
        console.log(req.session.carrito)
        let carrito = req.session.carrito.filter(item=>{
            return item.idProduct != idProducto
        })
        req.session.carrito = carrito;
        res.render('carrito',{
            user:req.session.user,
            carrito:req.session.carrito
        })
    }

}

module.exports = mainController;