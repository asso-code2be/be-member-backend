
exports.up = function(knex) {
  return knex.schema
    .createTable(`member`, function (table) {
      table.string(`id`).primary();
      table.string(`firstName`, 255);
      table.string(`lastName`, 255);
      table.string(`email`).unique();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable(`member`);
};
