const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let dbProductos = require('../data/dbProductos');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);



module.exports = {
    login: function(req,res) {
        res.render('login', { productos: dbProductos });
    },
    registro: function(req, res) {
        res.render('registro', { productos: dbProductos });
    },
    guardar: function(req, res) {
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

    },
    listado: function(req, res) {
        res.render('userslist', { productos: dbProductos });
    }
}