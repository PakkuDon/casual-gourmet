
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipe_tags', table => {
      table.increments('id');
      table.integer('recipe_id').notNullable();
      table.integer('tag_id').notNullable();

      table.foreign('recipe_id').references('id').inTable('recipes');
      table.foreign('tag_id').references('id').inTable('tags');
    })
  ]);
};

exports.down = function(knex, Promise) {

};
