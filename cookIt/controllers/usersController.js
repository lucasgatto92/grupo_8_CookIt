const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const render = require('../functions/render')


let dbProductos = require('../data/dbProductos');
let dbUsuarios = require('../data/dbUsers');
const { validationResult } = require('express-validator'); //traigo de express-validator el array 'validationResult' para mostrar los errores en la validación

const db = require('../database/models'); //requiero la base de datos

let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);



module.exports = {
    login: function(req, res) {
        res.render('login')
    },
    loginInit: function(req, res) {
        let url = "/";
        if (req.session.url) {
            url = req.session.url;
        }
        let errors = validationResult(req);
        if (errors.isEmpty()) { //si no hay errores
            if (req.body.recordarme) {
                res.cookie('user', req.body.email, { maxAge: 1000 * 60 * 2 }) //creo una cookie usando el metódo cookie pasandole tres parametros: el nombre de la cookie, el dato que almacena y la duracion expresada en milisegundos dentro de un objeto literal con una propiedad llamada 'maxAge:'
            }
            return res.redirect(url);
        } else {
            res.render('login', {
                errors: errors.mapped(), //paso los errores en un objeto literal
                old: req.body, //paso la resistencia de los datos correctos
                productos: dbProductos, //paso todos los productos
                rol: undefined,
                user: undefined
            });
        }
    },
    logout: function(req, res) {
        req.session.destroy() //destruyo la sesion
        if (req.cookies.user) { //verifico que la cookie exista OJO: cuando se requiere la cookie se escribe res.cookieS "con SSSSS"
            res.cookie('user', '', { maxAge: -1 }); //sobreescribo la cookie para eliminarla del sistema
        }
        res.redirect('/') //luego redirije al home
    },
    registro: function(req, res) {
        //res.render('registro', { productos: dbProductos });
        res.render('registro')
    },
    save: function(req, res, next) {
        let errors = validationResult(req); //tengo el array de errores a la mano
        if (errors.isEmpty()) { //si no hay errores...
            db.Usuario.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                    pass: bcrypt.hashSync(req.body.pass, 10),
                    avatar: (req.files[0]) ? req.files[0].filename : 'default.png',
                    rol: "user"
                })
                .then(function(result) {
                    console.log('se guardo el usuario')
                    res.redirect('/users/login');
                })
                .catch(errores => {
                    errors = {};
                    errores.errors.forEach(element => {
                        if (element.path == "nombre") {
                            errors["nombre"] = {};
                            errors["nombre"]["msg"] = element.message
                        }
                        if (element.path == "apellido") {
                            errors["apellido"] = {};
                            errors["apellido"]["msg"] = element.message
                        }
                        if (element.path == "email") {
                            errors["email"] = {};
                            errors["email"]["msg"] = element.message
                        }
                        if (element.path == "pass") {
                            errors["pass"] = {};
                            errors["pass"]["msg"] = element.message
                        }
                    })
                    res.send(errors)
                    res.render('registro', {

                        errors: errors, //paso los errores en un objeto literal
                        old: req.body, //paso la persistencia de los datos correctos
                        productos: dbProductos, //paso los productos necesarios para mostrar en el menú
                        rol: undefined,
                        id: undefined,
                        user: undefined
                    })
                })
        } else {
            res.render('registro', {
                errors: errors.mapped(), //paso los errores en un objeto literal
                old: req.body, //paso la persistencia de los datos correctos
                productos: dbProductos, //paso los productos necesarios para mostrar en el menú
                rol: undefined,
                id: undefined,
                user: undefined
            })
        }

    },
    guardar: function(req, res, next) {
        let errors = validationResult(req); //tengo el array de errores a la mano
        let lastID = (usuarios.length);
        if (errors.isEmpty()) { //si no hay errores...
            let nuevoUsuario = {
                id: lastID + 1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: (req.files[0]) ? req.files[0].filename : 'default.png',
                rol: "user"
            };

            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios));
            res.redirect('/users/login');
        } else { //si hay errores los paso al register
            res.render('registro', {
                errors: errors.mapped(), //paso los errores en un objeto literal
                old: req.body, //paso la persistencia de los datos correctos
                productos: dbProductos, //paso los productos necesarios para mostrar en el menú
                rol: undefined,
                id: undefined,
                user: undefined
            })
        }
    },
    listar: function(req, res) {
        db.Usuario.findAll()
            .then(usuarios => {
                res.render('users', {
                    usuarios: usuarios
                })
            })
    },
    perfil: function(req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(usuario => {
                res.render('perfil', {
                    usuario: usuario,
                });
            })

    }
}