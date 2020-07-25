let dbProductos = require('../data/dbProductos');

module.exports = {
    registro: function(req, res) {
        res.render('register', { productos: dbProductos });
    },
    listado: function(req, res) {
        res.render('userslist', { productos: dbProductos });
    }
}