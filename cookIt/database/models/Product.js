module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
            validator: {
                notNull: true
            }

        },
        precio: {
            type: dataTypes.INTEGER(4),
            allowNull: false,
            validator: {
                notNull: true,
                isNumeric: true
            }
        },
        descuento: {
            type: dataTypes.INTEGER(2),
            allowNull: false,
            validate: {
                notNull: true,
                isNumeric: true

            }
        },
        descripcion: {
            type: dataTypes.STRING(512),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        tiempo: {
            type: dataTypes.INTEGER(3).UNSIGNED,
            validator: {
                isNumeric: true,
                notNull: true
            }
        },
        apto: {
            type: dataTypes.STRING(100),

        },
        porciones: {
            type: dataTypes.INTEGER(2),
            validator: {
                isNumeric: true,
                notNull: true
            }
        },
        calorias: {
            type: dataTypes.INTEGER(4),
            validator: {
                isNumeric: true,
                notNull: true
            }
        },
        imagenes: {
            type: dataTypes.STRING(255),

        },
        receta: {
            type: dataTypes.STRING(45),

        },
        idCategory: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "products",
        timestamps: false

    }
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "idCategory"
        })
        Product.belongsToMany(models.Vinos, {
            as: "vinos",
            through:'product_wine',
            foreignKey: "idProducto",
            otherKey:"idWine",
            timestamps:false
        })
    }


    return Product;
}