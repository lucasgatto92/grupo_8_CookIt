const { cookie } = require("express-validator");

const db = require('../database/models'); //requiero la base de datos


module.exports = function(req, res, next) {
    if (req.cookies.user) {
        db.Usuario.findOne({
                where: {
                    email: req.cookies.user
                }
            })
            .then(result => {
                req.session.user = result
                console.log("hay una cookies guardada de " + result.email)
                next()
            })
    } else {
        console.log("no hay cookies");
        next()
    }
}