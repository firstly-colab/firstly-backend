/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'guru', name: 'Gurupriyan', password: '123'},
    {username: 'christy', name: 'Christine', password: '123'},
    {username: 'gpoon', name: 'Gigi', password: '123'}
  ]);
};
