
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', table => {
      table.text('image_url');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', table => {
      table.dropColumn('image_url');
    })
  ]);
};
