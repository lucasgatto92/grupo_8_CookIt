var path = require('path');

const users = require('../data/dbUsers'); //base de datos en JSON

const db = require('../database/models'); //requiero la base de datos

const { check, validationResult, body } = require('express-validator');


module.exports = [
    check('nombre') //chequeo que el nombre tenga al menos tres caracteres
    .isLength({ min: 3 })
    .withMessage('Debes ingresar tu nombre'),

    check('apellido') //chequeo que el apellido tenga al menos tres caracteres
    .isLength({ min: 3 })
    .withMessage('Debes ingresar tu apellido'),

    check('email') //chequeo que el email tenga un formato válido
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    /*body('email') //chequeo que el email no esté registrado en JSON
    .custom(function(value) {

        for (let index = 0; index < users.length; index++) {
            if (users[index].email == value) {
                return false
            }
        }
        return true
    })
    .withMessage('Este mail ya está registrado'),*/




    body('email')
    .custom(async value => {
        let usuario = await db.Usuario.findOne({
            where: {
                email: value
            }
        })
        console.log(usuario)
        return (usuario == null) ? false : true
    })
    .withMessage('El usuario está registrado'),

    check('pass')
    .isLength({ min: 6, max: 16 })
    .withMessage('Debes ingresar una contraseña entre 6 y 16 caracteres'),

    body('passrepeat')
    .custom((value, { req }) => {
        if (value !== req.body.pass) {
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden')

]