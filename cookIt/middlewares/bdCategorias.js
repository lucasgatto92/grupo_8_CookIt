const db = require('../database/models');

module.exports = (req, res, next) => {
    db.Categoria.findAll()
        .then(categorias => {
            res.locals.categorias = categorias
            next()
        })
}