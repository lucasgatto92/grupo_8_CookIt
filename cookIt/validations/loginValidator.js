const { check, validationResult, body } = require('express-validator');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),
    check('pass')
    .isLength({ min: 1 })
    .withMessage('Debes ingresar una contraseña')
]