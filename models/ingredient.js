'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ingredient;
};