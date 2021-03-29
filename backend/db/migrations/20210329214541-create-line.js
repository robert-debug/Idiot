'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ordernum: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      linetext: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trackId: {
        type: Sequelize.INTEGER,
        references:{ model: 'Tracks'},
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lines');
  }
};