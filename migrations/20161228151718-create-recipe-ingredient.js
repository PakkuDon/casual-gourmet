'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('RecipeIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Recipes',
          key: 'id'
        }
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ingredients',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      units: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('RecipeIngredients');
  }
};
