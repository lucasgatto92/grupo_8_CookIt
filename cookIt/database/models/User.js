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
            validate: {
                isAlpha: {
                    args: true,
                    msg: "El nombre solo puede tener letras"
                },
                notEmpty: {
                    msg: "El campo nombre es obligatorio"
                }
            }
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "El apellido solo puede tener letras"
                },
                notEmpty: {
                    msg: "El campo apellido es obligatorio"
                }
            }
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Debe escribir un email válido"
                },
                notEmpty: {
                    msg: "El campo email es obligatorio"
                }
            }
        },
        pass: {
            type: dataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Debes escribir una contraseña"
                }
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
        },
        localidad: {
            type: dataTypes.STRING(45),
        },
        provincia: {
            type: dataTypes.STRING(45),
        },
    };

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }
    let User = sequelize.define(alias, cols, config)


    return User;
}