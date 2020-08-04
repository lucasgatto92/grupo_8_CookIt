const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');


let dbProductos = require('../data/dbProductos');
const { validationResult } = require('express-validator'); //traigo de express-validator el array 'validationResult' para mostrar los errores en la validación
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);



module.exports = {
    login: function(req, res) {
        res.render('login', { productos: dbProductos });
    },
    processLogin: function(req, res, next) {
        let errors = validationResult(req);
        if (errors.isEmpty()) { //si no hay errores
            res.redirect('/'); //mientras tanto redirijo al home
        } else { //si hay errores los paso al login
            res.render('login', {
                errors: errors.mapped(), //paso los errores en un objeto literal
                old: req.body, //paso la resistencia de los datos correctos
                productos: dbProductos //paso todos los productos
            });
        }
    },
    registro: function(req, res) {
        res.render('registro', { productos: dbProductos });
    },
    guardar: function(req, res, next) {
        let errors = validationResult(req); //tengo el array de errores a la mano
        if (errors.isEmpty()) { //si no hay errores...
            let nuevoUsuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: (req.files[0]) ? req.files[0].filename : 'default.png'
            };

            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(usuarios));
            res.redirect('/users/login');
        } else { //si hay errores los paso al register
            res.render('registro', {
                errors: errors.mapped(), //paso los errores en un objeto literal
                old: req.body, //paso la persistencia de los datos correctos
                productos: dbProductos //paso los productos necesarios para mostrar en el menú
            })
        }


    },
    listado: function(req, res) {
        res.render('userslist', { productos: dbProductos });
    }
}