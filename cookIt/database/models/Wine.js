module.exports = function(sequelize, dataTypes) {
    let alias = "Vinos";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validator: {
                notNull: true
            }
        },
        descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false,
            validator: {
                notNull: true
            }
        }
    };

    let config = {
        tableName: "wines"
    }
    let Wine = sequelize.define(alias, cols, config)

    Wine.associate = function(models) {
        Wine.belongsToMany(models.Categoria, {
            as: "categorias",
            through:'category_wine',
            foreignKey: "idWine",
            otherKey:"idCategory",
            timestamps:false
        })
    }

    return Wine;
}