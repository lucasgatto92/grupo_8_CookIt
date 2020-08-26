const dbProductos = require('../data/dbProductos');
const dbUsuarios = require('../data/dbUsers');
const dbProducts = require('../data/dbProducts');

module.exports = function(req, res, vista) {
    let rol = undefined;
    let id = undefined;


    if (req.session.user != undefined) {
        let session = req.session.user;
        rol = session.rol;
        id = session.id;
    }
    return res.render(vista, {
        dbUsuarios: dbUsuarios,
        productos: dbProductos,
        products: dbProducts,
        user: req.session.user,
        rol: rol,
        id: id
    })
}