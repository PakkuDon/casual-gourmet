'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Recipes', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Recipes', 'author_id', {
      allowNull: true
    });
  }
};
