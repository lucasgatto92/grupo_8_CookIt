const { sequelize } = require('../database/models');
const db = require('../database/models');

module.exports = (req, res, next) => {
    db.Producto.findAll({
            order: sequelize.random(),
            limit: 5
        })
        .then(productos => {
            res.locals.productosHeader = productos
            let productosHeader = productos
            next()
        })
}