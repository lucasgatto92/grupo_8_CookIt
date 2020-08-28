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
        products: dbProducts,
        user: req.session.user,
        rol: "admin",
        id: undefined
    })
}