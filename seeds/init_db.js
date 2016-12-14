var bcrypt = require('bcryptjs');

var ingredients = [
  'plain flour',
  'milk',
  'bread',
  'eggs',
  'pasta',
  'pineapple'
];
var tags = [
  'breakfast',
  'brunch',
  'lunch',
  'tea',
  'dinner',
  'dessert',
  'snack'
];

exports.seed = function(knex, Promise) {
  // Delete existing entries
  return Promise.all([
    knex('bookmarks').del(),
    knex('reviews').del(),
    knex('recipe_tags').del(),
    knex('tags').del(),
    knex('recipe_ingredients').del(),
    knex('ingredients').del(),
    knex('recipes').del(),
    knex('users').del()
  ])
  // Reset ID sequences
  .then(() => {
    return Promise.all([
      knex.raw('ALTER SEQUENCE bookmarks_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE ingredients_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE recipe_ingredients_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE recipe_tags_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE recipes_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE reviews_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE tags_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    ]);
  })
  // Add users
  .then(() => {
    var salt = bcrypt.genSaltSync(10);
    return Promise.all([
      knex('users').insert({
        username: 'BobbyTables',
        first_name: 'Bobby',
        last_name: 'Tables',
        email: 'bobby@ga.co',
        password: bcrypt.hashSync('cakepudding', salt)
      })
    ]);
  })
  // Add ingredients
  .then(() => {
    return Promise.all(ingredients.map(ingredient => {
      return knex('ingredients').insert({
        name: ingredient
      });
    }));
  })
  // Add tags
  .then(() => {
    return Promise.all(tags.map(tag => {
      return knex('tags').insert({
        name: tag
      });
    }));
  });
};
