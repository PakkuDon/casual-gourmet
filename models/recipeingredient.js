'use strict';
module.exports = function(sequelize, DataTypes) {
  var RecipeIngredient = sequelize.define('RecipeIngredient', {
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipes',
        key: 'id'
      }
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ingredients',
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER,
    units: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RecipeIngredient;
};
