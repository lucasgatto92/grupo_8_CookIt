module.exports = function(req, res) {
    if (req.session.user) {
        session = req.session.user;
        rol = session.rol;
        console.log(rol)
    } else {
        session = undefined;
        rol = "guest"
    }
    return session;

}