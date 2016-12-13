
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipe_ingredients', table => {
      table.increments('id').primary();
      table.integer('recipe_id').notNullable();
      table.integer('ingredient_id').notNullable();

      table.foreign('recipe_id').references('id').inTable('recipes');
      table.foreign('ingredient_id').references('id').inTable('ingredients');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipe_ingredients')
  ]);
};
