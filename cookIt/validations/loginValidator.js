let users = require('../data/dbUsers');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');


module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('pass')
    .isLength({ min: 1 })
    .withMessage('Debes ingresar una contraseña'),
    /*
        body('email') //chequeo que el email no esté registrado
        .custom(function(value) {
            users.forEach(user => {
                if (user.email != value) {
                    result = false;
                }
            })
            if (result == false) {
                return false
            } else {
                return true
            }
        })
        .withMessage('Este mail no stá registrado')
        */
]