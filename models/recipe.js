'use strict';

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    image_url: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Recipe.belongsTo(models.User, {
          as: 'author',
          foreignKey: 'author_id'
        });
        Recipe.hasMany(models.Review, {
          as: 'reviews',
          foreignKey: 'recipe_id'
        });
        Recipe.hasMany(models.Bookmark, {
          as: 'bookmarks',
          foreignKey: 'recipe_id'
        });
      }
    }
  });
  return Recipe;
};
