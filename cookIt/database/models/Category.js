module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria";
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
        imagen: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false

    }
    let Category = sequelize.define(alias, cols, config)

    Category.associate = function(models) {
        Category.hasMany(models.Producto, {
            as: "products",
            foreignKey: "idCategory"
        })
    }

    return Category;
}