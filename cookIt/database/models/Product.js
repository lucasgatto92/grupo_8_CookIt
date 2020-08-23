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
            type: dataTypes.STRING(45),
            allowNull: false,
            validator: {
                notNull: true
            }

        },
        precio: {
            type: dataTypes.DECIMAL(4, 2),
            allowNull: false,
            validator: {
                notNull: true,
                isDecimal: true
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
            type: dataTypes.STRING(255),
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
            type: dataTypes.INTEGER(3),
            validator: {
                isNumeric: true,
                notNull: true
            }
        },
        imagenes: {
            type: dataTypes.STRING(255),
            validate: {
                notNull: true
            }
        },
        receta: {
            type: dataTypes.STRING(45),
            validate: {
                notNull: true
            }
        },
        idCategory: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "products"
    }
    let User = sequelize.define(alias, cols, config)


    return User;
}