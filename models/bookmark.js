'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define('Bookmark', {
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
        Bookmark.belongsTo(models.Recipe, {
          as: 'recipe',
          foreignKey: 'recipe_id'
        });
      }
    }
  });
  return Bookmark;
};
