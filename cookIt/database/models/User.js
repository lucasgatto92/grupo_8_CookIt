const { ROWLOCK } = require("sequelize/types/lib/table-hints");

module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
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
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validator: {
                notNull: true
            }
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: true
            }
        },
        pass: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        avatar: {
            type: dataTypes.STRING(45),
        },
        rol: {
            type: dataTypes.STRING(45),
        },
        direccion: {
            type: dataTypes.STRING(255),
        },
        cp: {
            type: dataTypes.INTEGER(4),
            validator: {
                isNumeric: true
            }
        },
        localidad: {
            type: dataTypes.STRING(45),
        },
        provincia: {
            type: dataTypes.STRING(45),

        },
    };

    let config = {
        tableName: "users"
    }
    let User = sequelize.define(alias, cols, config)


    return User;
}