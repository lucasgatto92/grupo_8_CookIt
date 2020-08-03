let dbProductos = require('../data/dbProductos');
const fs = require('fs');
const { equal } = require('assert');

module.exports = {
    listar: (req, res) => {
        dbProductos = require('../data/dbProductos');
        let productos = dbProductos.map(producto => {
            switch (producto.category) {
                case 'esp':
                    producto.category = 'Española'
                    break;
            }
            return producto
        });
        res.render('listarProductos', { productos: productos });
    },
    agregar: (req, res) => {
        res.render('agregarProducto', { productos: dbProductos });
    },
    detalle: (req, res) => {
        let idProducto = req.params.id;
        let producto = dbProductos.filter(producto => {
            return producto.id == Number(idProducto)
        })
        res.render('detalleProducto', { producto: producto[0], productos: dbProductos });
    },
    guardar: (req, res, next) => {
        let id = 0;
        if (fs.existsSync('./data/products.json')) {
            let productos = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
            let id = productos[(productos.length) - 1].id; //capto el ultimo id registrado
            let newImages = req.files;
            let saveImages = [];
            newImages.forEach(images => {
                saveImages.push(images.filename);
            })
            let producto = {
                id: id + 1,
                name: req.body.name,
                description: req.body.descripcion,
                //image: req.files[0].filename,
                image: saveImages,
                category: req.body.categoria,
                price: req.body.precio,
                descuento: req.body.descuento,
                tiempo: req.body.tiempo,
                porciones: req.body.porciones,
                calorias: req.body.calorias,
                maridaje: req.body.maridaje,
                oferta: req.body.oferta,
                especial: req.body.especial,
                vegano: req.body.vegano,
                bajosodio: req.body.bajosodio,
                celiaco: req.body.celiaco,
            }
            productos.push(producto);
            productos.sort(function(a, b) {
                return ((a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0)
            })
            fs.writeFileSync('./data/products.json', JSON.stringify(productos), 'utf-8')
        } else {
            let productos = [];
            let producto = {
                id: 1,
                name: req.body.name,
                description: req.body.descripcion,
                image: req.files[0].filename,
                category: req.body.categoria,
                price: req.body.precio,
                descuento: req.body.descuento,
                tiempo: req.body.tiempo,
                porciones: req.body.porciones,
                calorias: req.body.calorias,
                maridaje: req.body.maridaje,
                oferta: req.body.oferta,
                especial: req.body.especial,
                vegano: req.body.vegano,
                bajosodio: req.body.bajosodio,
                celiaco: req.body.celiaco,
            }
            productos.push(producto);
            productos.sort(function(a, b) {
                return ((a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0)
            })
            fs.writeFileSync('./data/products.json', JSON.stringify(productos), 'utf-8')

        }

        res.redirect('/productos')
    },
    editar: (req, res) => {
        let idProducto = req.params.id;
        let producto = dbProductos.filter(producto => {
            return producto.id == Number(idProducto)
        })
        producto.map(producto => {
            producto.price = Number(producto.price)

            switch (producto.category) {
                case 'esp':
                    producto.category = 'Española'
                    break;
            }
            return producto
        });
        console.log(producto[0].price)
        res.render('editarProducto', { producto: producto[0], productos: dbProductos });
    },
    actualizar: (req, res, next) => {
        let id = Number(req.params.id);
        dbProductos.forEach(producto => {
            if (producto.id == id) {
                dbProductos = dbProductos.filter(producto => {
                    return producto.id != id
                }); //filtro la base de datos para obtener todos los productos menos el que estoy actualizando
                if (req.files) {
                    let newImages = req.files;
                    newImages.forEach(images => {
                        producto.image.push(images.filename);
                    })
                }
                if (req.body.elimina) {
                    console.log(typeof req.body.elimina)
                    if (typeof req.body.elimina == "string") {
                        console.log(req.body.elimina)
                        let aEliminar = req.body.elimina;
                        let position = producto.image.indexOf(aEliminar);
                        producto.image.splice(position);
                        console.log(position);
                        fs.unlinkSync('./public/images/products/' + aEliminar)
                    }
                    if (typeof req.body.elimina == "object") {
                        console.log(req.body.elimina);
                        let aEliminar = req.body.elimina;
                        aEliminar.forEach(elimina => {
                            let position = producto.image.indexOf(elimina);
                            if (position != -1) {
                                producto.image.splice(position);
                                fs.unlinkSync('./public/images/products/' + elimina)
                            }
                        })
                    }
                }

                let productoActualizado = {
                    id: id,
                    name: req.body.name,
                    description: req.body.descripcion,
                    image: producto.image,
                    category: req.body.categoria,
                    price: req.body.precio,
                    descuento: req.body.descuento,
                    tiempo: req.body.tiempo,
                    porciones: req.body.porciones,
                    calorias: req.body.calorias,
                    maridaje: req.body.maridaje,
                    oferta: req.body.oferta,
                    especial: req.body.especial,
                    vegano: req.body.vegano,
                    bajosodio: req.body.bajosodio,
                    celiaco: req.body.celiaco,
                }
                dbProductos.push(productoActualizado);
                dbProductos.sort(function(a, b) {
                    return ((a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0)
                })
                fs.writeFileSync('./data/products.json', JSON.stringify(dbProductos), 'utf-8');
                res.redirect('/productos');
            }
        })

    },
    borrar: (req, res) => {
        let id = Number(req.params.id);
        dbProductos.forEach(producto => {
            if (producto.id == id) {
                dbProductos = dbProductos.filter(producto => {
                    return producto.id != id
                })
            }
        })
        dbProductos.sort(function(a, b) {
            return ((a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0)
        })
        fs.writeFileSync('./data/products.json', JSON.stringify(dbProductos), 'utf-8');
        res.redirect('/productos');
    }

}