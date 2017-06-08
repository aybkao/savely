
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.integer('income', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('categories', function(table) {
      table.increments('id').unsigned().primary();
      table.string('category').notNullable();
      table.float('budget_limit').notNullable(); 
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE').notNullable();
      table.timestamp("created_at").defaultTo(knex.raw('now()')).notNullable();
    }),
    knex.schema.createTableIfNotExists('transactions', function(table) {
      table.increments('id').unsigned().primary();
      table.string('vendor', 100).nullable();
      table.string('description', 100).nullable();
      table.float('amount').nullable(); 
      table.date('date').nullable();
      table.integer('category_id').references('categories.id').onDelete('CASCADE');
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.timestamp("created_at").defaultTo(knex.raw('now()')).notNullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};

