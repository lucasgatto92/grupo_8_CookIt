module.exports = function(sequelize, dataTypes) {
    let alias = "Vino";
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
    let User = sequelize.define(alias, cols, config)


    return User;
}