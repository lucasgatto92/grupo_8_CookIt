'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('comments', {
      id: {
        type:Sequelize.DataTypes.INTEGER (10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      comentario: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
      imagen: {
        type: Sequelize.DataTypes.STRING (45),
        allowNull: true
      },
      idUser: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        foreignKey: true
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable ('commets');
  }
};
