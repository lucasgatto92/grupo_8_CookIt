const Swal = require('sweetalert2')
const db = require('../database/models'); //requiero la base de datos

const mainController = {
    carrito:(req,res)=>{
        let carrito = req.session.carrito;
        let parcial, total = 0;
        carrito.forEach(item => {
            parcial = item.producto.precio * item.cantidad
            total = total + parcial
        })
        res.render('carrito', {
            user: req.session.user,
            carrito : req.session.carrito,
            total: total
        })
    },
   agregar:(req,res)=>{
    db.Producto.findOne({
        where:{
            id:req.params.idProduct
        },
        include: [{ association:  "vinos"}],
    })
    .then(result=>{
        let vinos = [];
        if(req.body.vinos){
            if(req.body.vinos.length > 1){
                result.vinos.forEach(vino =>{
                    req.body.vinos.forEach(select => {
                        if(vino.id == select){
                        vinos.push(vino)
                        }
                    })
                
                })
            }else{
                result.vinos.forEach(vino => {
                    if(vino.id == req.body.vinos){
                        vinos.push(vino)
                    }
                })
            }
        }
        req.session.carrito.forEach(item => {
            if(item.producto.id == req.params.idProduct){
                item.cantidad += 1;
                res.redirect('/productos/productsDetail/'+req.params.idProduct)
            }
        });

        let compra = {
            idUser : req.session.user.id,
            idProduct : Number(req.params.idProduct),
            cantidad: req.body.cantidad,
            producto: result.dataValues,
            vinos: vinos
        }
        req.session.carrito.push(compra)

        res.redirect('/productos/productsDetail/'+req.params.idProduct)

    })

   },
   actualizar:(req,res) =>{
    let carrito = req.session.carrito;
    let item = Number(req.body.item);
    let cantidad = Number(req.body.cantidad);

    carrito[item].cantidad = cantidad;
    res.redirect('/carrito#view')
   },
    finalizar: (req, res) => {
    
            res.render('carrito', {
                user: req.session.user,
                carrito : req.session.carrito
            })

    },
    eliminar:(req,res)=>{
        let idProducto = req.params.id;
        let carrito = req.session.carrito.filter(item=>{
            return item.idProduct != idProducto
        })
        req.session.carrito = carrito;
        let parcial, total = 0;
        carrito.forEach(item => {
            parcial = item.producto.precio * item.cantidad
            total = total + parcial
        })
       /*  res.render('carrito',{
            user:req.session.user,
            carrito:req.session.carrito,
            total:total
        }) */
        res.redirect('/carrito#view')
    }

}

module.exports = mainController;