/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('likedQuestion', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('user');
        table.integer('response_id').references('id').inTable('response');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('likedQuestion')
};
