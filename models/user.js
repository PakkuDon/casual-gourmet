'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Bookmark, {
          as: 'bookmarks',
          foreignKey: 'user_id'
        });
        User.hasMany(models.Recipe, {
          as: 'recipes',
          foreignKey: 'author_id'
        });
        User.hasMany(models.Review, {
          as: 'reviews',
          foreignKey: 'user_id'
        });
      }
    }
  });
  return User;
};
