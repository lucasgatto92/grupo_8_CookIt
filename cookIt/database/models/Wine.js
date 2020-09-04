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
            type: dataTypes.STRING(512),
            allowNull: false,
            validator: {
                notNull: true
            }
        },
        precio:{
            type:dataTypes.INTEGER(4),
            allowNull:false,
            validator:{
                notNull:true
            }
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false,
            validator:{
                notNull:true
            }
        }
    };

    let config = {
        tableName: "wines",
        timestamps:false
    }
    let Wine = sequelize.define(alias, cols, config)

    return Wine;
}