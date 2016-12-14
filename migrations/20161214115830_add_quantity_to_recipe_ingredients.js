
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipe_ingredients', table => {
      table.integer('quantity');
      table.string('units');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipe_ingredients', table => {
      table.dropColumn('quantity');
      table.dropColumn('units');
    })
  ]);
};
