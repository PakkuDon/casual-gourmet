
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', table => {
      table.increments('id').primary();
      table.text('name');
      table.text('description');
      table.text('instructions');
      table.date('date_posted');
      table.integer('author_id').notNullable();
      table.foreign('author_id').references('id').inTable('users');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes')
  ]);
};
