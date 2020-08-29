const db = require('../database/models');

module.exports = {

    list: (req, res) => {

        db.Producto.findAll({
                include: [{ association: "categoria" }]
            })
            .then(productos => {
                res.render('listarProductos', {
                    productos: productos,
                })
            })
    },
    add: function(req, res) { //metodo para cargar el formulario de carga de producto

        db.Categoria.findAll()
            .then(categorias => {
                res.render('productAdd', {
                    categorias: categorias,
                })
            })
            .catch(err => {
                res.send(err)
            })
    },
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
    /* edit: (req, res) => { //PRIMER INTENTO FUNCIONAL
         db.Producto.findOne({
                 where: {
                     id: req.params.id
                 },
                 include: [{ association: "categoria" }]

             })
             .then(producto => {
                 db.Categoria.findAll()
                     .then(categorias => {

                         res.render('productEdit', {
                             producto: producto,
                             categorias: categorias
                         })
                     })
             })

     },*/
    edit: function(req, res) {
        let producto = db.Producto.findByPk(req.params.id, { include: [{ association: "categoria" }] });
        let categorias = db.Categoria.findAll();

        Promise.all([producto, categorias])
            .then(function([producto, categorias]) {
                res.render('productEdit', {
                    producto: producto,
                    categorias: categorias
                })
            })

    },
    update: function(req, res) {
        res.send(req.body)
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
        db.Producto.update({
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
        }, {
            where: {
                id: req.params.id
            }
        })
    },
    listarUsuarios: function(req, res) {
        db.Usuario.findAll()
            .then(usuarios => {
                res.render('users', {
                    usuarios: usuarios
                })
            })
    },
    perfilUsuario: function(req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(usuario => {
                res.render('perfil', {
                    usuario: usuario,
                });
            })

    }
}