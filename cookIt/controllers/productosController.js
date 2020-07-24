let dbProductos = require('../data/dbProductos');
const fs = require('fs');

module.exports = {
    listar: (req, res) => {
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
            id = productos.length;
            let producto = {
                id: id + 1,
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
                });
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
        fs.writeFileSync('./data/products.json', JSON.stringify(dbProductos), 'utf-8');
        res.redirect('/productos');
    }

}