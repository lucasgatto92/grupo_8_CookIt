const dbProductos = require('../data/dbProductos');
const dbUsuarios = require('../data/dbUsers');

module.exports = function(req, res, vista) {
    let rol = undefined;
    let id = undefined;
    let productos = dbProductos;


    if (req.session.user != undefined) {
        let session = req.session.user;
        rol = session.rol;
        id = session.id;

    }
    return res.render(vista, {
        dbUsuarios: dbUsuarios,
        productos: productos,
        user: req.session.user,
        rol: rol,
        id: id
    })
}