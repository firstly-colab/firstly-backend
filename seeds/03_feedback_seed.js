/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('feedback').del()
  await knex('feedback').insert([
    {user_id: 1, response_id: 2, desired: false},
    {user_id: 1, response_id: 1, desired: true},
    {user_id: 1, response_id: 3, desired: true}
  ]);
};
