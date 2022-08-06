/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {email: 'guru@gmail.com', name: 'Gurupriyan', password: '123'},
    {email: 'christy@gmail.com', name: 'Christine', password: '123'},
    {email: 'gpoon@gmail.com', name: 'Gigi', password: '123'}
  ]);
};
