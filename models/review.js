'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    content: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipes',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.User, {
          as: 'user',
          foreignKey: 'user_id'
        });
        Review.belongsTo(models.Recipe, {
          as: 'recipe',
          foreignKey: 'recipe_id'
        });
      }
    }
  });
  return Review;
};
