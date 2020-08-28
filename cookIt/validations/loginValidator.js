let users = require('../data/dbUsers');

const db = require('../database/models'); //requiero la base de datos

const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');


module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),


    body('email')
    .custom(function(value) {
        return db.Usuario.findOne({
                where: { email: value }
            })
            .then(function(result) {
                if (result == null) {
                    return Promise.reject('El usuario no está registrado')
                }
            })
    }),

    check('pass')
    .isLength({ min: 1 })
    .withMessage('Debes ingresar una contraseña'),

    body('pass')
    .custom(function(value, { req }) {
        return db.Usuario.findOne({
                where: { email: req.body.email }
            })
            .then(function(result) {
                console.log(bcrypt.compareSync(value, result.dataValues.pass))
                if (!bcrypt.compareSync(value, result.dataValues.pass)) {
                    return Promise.reject('La contraseña es incorrecta')
                } else {
                    let usuario = result;
                    console.log(usuario.dataValues)
                    return usuario
                }
            })

    })
]