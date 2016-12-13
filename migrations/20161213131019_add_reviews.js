
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.text('content');
      table.integer('score');
      table.dateTime('date_posted');
      table.integer('user_id').notNullable();
      table.integer('recipe_id').notNullable();

      table.foreign('user_id').references('id').inTable('users');
      table.foreign('recipe_id').references('id').inTable('recipes');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews')
  ]);
};
