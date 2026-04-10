exports.up = function(knex) {
  return knex.schema
    .createTable('genres', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
    })
    .createTable('platforms', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('manufacturer');
      table.integer('year');
    })
    .createTable('games', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('year');
      table.text('description');
      table.string('image');
      table.integer('genre_id').unsigned().references('id').inTable('genres');
      table.integer('platform_id').unsigned().references('id').inTable('platforms');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('games')
    .dropTableIfExists('platforms')
    .dropTableIfExists('genres');
};
