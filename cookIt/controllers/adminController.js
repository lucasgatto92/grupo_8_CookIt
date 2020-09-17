const fs = require('fs');
const db = require('../database/models');

module.exports = {

    // --> LISTAR LOS PRODUCTOS

    list: (req, res) => {

        db.Producto.findAll({
                include: [{ association: "categoria" }]
            })
            .then(productos => {
                res.render('listarProductos', {
                    productos: productos,
                    user: req.session.user
                })
            })
    },
    // --> AÑADIR UN PRODUCTO (FORMULARIO)

    add: function(req, res) { //metodo para cargar el formulario de carga de producto

        db.Categoria.findAll()
            .then(categorias => {
                res.render('productAdd', {
                    categorias: categorias,
                    user: req.session.user
                })
            })
            .catch(err => {
                res.send(err)
            })
    },
    // --> GUARDAR UN PRODUCTO

    save: function(req, res) { //metodo para guardar un producto en la base de datos
        let aptoArray = [];
        if (req.body.sodio) {
            aptoArray.push("sodio")
        };
        if (req.body.vegano) {
            aptoArray.push("vegano")
        };
        if (req.body.celiaco) {
            aptoArray.push("celiaco")
        };
        let apto = aptoArray.join(',');

        let imagesFiles = req.files.filter(file => {
            return file.fieldname == "images"
        })
        let imagesArray = [];
        imagesFiles.forEach(imagen => {
            imagesArray.push(imagen.filename);
        })
        let images = imagesArray.join(',');

        let pdfFile = req.files.filter(file => {
            return file.fieldname == "receta"
        })
        db.Producto.create({
                nombre: req.body.nombre.trim(),
                precio: Number(req.body.precio),
                descuento: Number(req.body.descuento),
                descripcion: req.body.descripcion.trim(),
                tiempo: Number(req.body.tiempo),
                apto: apto,
                porciones: Number(req.body.porciones),
                calorias: Number(req.body.calorias),
                imagenes: images,
                receta: pdfFile[0].filename,
                idCategory: (req.body.categoria) ? req.body.categoria : 1
            })
            .then(result => {
                console.log('****************************************')
                console.log('el producto se guardo satisfactoriamente')
                console.log('****************************************')
                res.redirect('/productos/view');
            })
            .catch(err => {
                console.log(err)
            })
    },
    // --> EDITAR UN PRODUCTO (FORMULARIO)


    edit: function(req, res) {
        let producto = db.Producto.findByPk(req.params.id, { include: [{ association: "categoria" }] });
        let categorias = db.Categoria.findAll();

        Promise.all([producto, categorias])
            .then(function([producto, categorias]) {
                req.session.imagenes = producto.imagenes;
                req.session.receta = producto.receta;
                res.render('productEdit', {
                    producto: producto,
                    categorias: categorias,
                    user: req.session.user
                })
            })

    },
    // --> ACTUALIZAR UN PRODUCTO

    update: function(req, res) {

        // --> procesamiento de los datos para el campo APTO
        let aptoArray = []; //creo un array vacio para luego ser llenado por los datos que vienen del formulario
        if (req.body.sodio) {
            aptoArray.push("sodio")
        };
        if (req.body.vegano) {
            aptoArray.push("vegano")
        };
        if (req.body.celiaco) {
            aptoArray.push("celiaco")
        };
        let apto = aptoArray.join(','); //guardo en la variable apto el array convertido a string

        // --> procesamiento de los datos para el campo IMAGENES
        let imagenesGuardadas = req.session.imagenes; //leo las imagenes guardadas en la bd
        imagenesGuardadas = imagenesGuardadas.split(',') //las convierto en un array
        let imagenesABorrar = []; //creo un array vacio para almacenar las imagenes a borrar

        if (typeof req.body.elimina == "string") { //chequeo si una imagen la que se borra
            imagenesABorrar.push(req.body.elimina) //si es así la agrego al array antes creado
        } else if (req.body.elimina) { //si son dos o más imagenes y si hay imagenes a borrar
            imagenesABorrar = req.body.elimina //como ya vienen en un array las guardo tal como vienen
        }

        imagenesABorrar.forEach(imagenABorrar => { //recorro el array de imagenes a borrar
            if (imagenesGuardadas.includes(imagenABorrar)) { //chequeo si la imagen está guardada
                let indice = imagenesGuardadas.indexOf(imagenABorrar); //capto la posicion en el array
                imagenesGuardadas.splice(indice, 1); //borro dicha posición
                fs.unlinkSync('./public/images/products/' + imagenABorrar);
                console.log(imagenABorrar + " borrada de la carpeta")
            }
        })

        let imagenesFiles = req.files.filter(file => { //filtro solo las imagenes que me viene por Files
            return file.fieldname == "images"
        })

        let imagenesAGuardar = imagenesGuardadas;
        imagenesFiles.forEach(imagen => { //recorro las imagenes que me vienen por formulario
            imagenesAGuardar.push(imagen.filename); //las voy agregando a mi array de imagenes nuevas
        })
        imagenesAGuardar = imagenesAGuardar.join(','); //convierto en array en un string separado por comas

        let recetaAGuardar = req.session.receta; //recupero la receta que está guardada

        req.files.forEach(file => { //recorro la variable files para saber si se subio una nueva receta
            if (file.fieldname == "receta") {
                recetaAGuardar = file.fieldname //si hay una nueva receta la dejo lista para guardarla
                fs.unlinkSync('./public/products/recetas/' + file.fieldname);
                console.log(file.fieldname + " borrada de la carpeta")
            }
        })

        db.Producto.update({
            nombre: req.body.nombre.trim(),
            precio: Number(req.body.precio),
            descuento: Number(req.body.descuento),
            descripcion: req.body.descripcion.trim(),
            tiempo: Number(req.body.tiempo),
            apto: apto,
            porciones: Number(req.body.porciones),
            calorias: Number(req.body.calorias),
            imagenes: imagenesAGuardar,
            receta: recetaAGuardar,
            idCategory: (req.body.categoria) ? req.body.categoria : 1
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin/products')
    },
    // --> BORRAR UN PRODUCTO
    delete: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(function(producto) {

                let imagenes = producto.imagenes.split(',');

                imagenes.forEach(imagen => {
                    if (fs.existsSync('./public/images/products/' + imagen)) {
                        fs.unlinkSync('./public/images/products/' + imagen);
                        console.log(imagen + "************* borrado de la carpeta")
                    }
                });
                if (fs.existsSync('./public/products/recetas/' + producto.receta)) {
                    fs.unlinkSync('./public/products/recetas/' + producto.receta);
                    console.log(producto.receta + "********** borrado de la carpeta")
                }
                db.Producto.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.redirect('/admin/products');

            })


    },

    listarUsuarios: function(req, res) {
        db.Usuario.findAll()
            .then(usuarios => {
                res.render('users', {
                    usuarios: usuarios,
                    user: req.session.user
                })
            })
    }


}