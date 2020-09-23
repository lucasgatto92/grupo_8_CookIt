module.exports = function(sequelize, dataTypes) {
    let alias = "Comentarios";
    let cols = {
         id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
         },
         comentario: {
             type: dataTypes.STRING (500),
             allowNull: false,
         },
         imagen: {
             type: dataTypes.STRING(45),
             allowNull: true
         },
        };
    let config = {
        tableName: "comments",
        timestamps: true,
        undercored: true
    }

    let Comentarios = sequelize.define(alias, cols, config)

    return Comentarios;
}
