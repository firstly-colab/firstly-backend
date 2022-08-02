/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('response').del()
  await knex('response').insert([
    {dialogue: 'If you can eat one meal for the rest of your life, what would it be and why?', category: 'food'},
    {dialogue: 'If you are on vacation, what is the first thing you like to do when you arrive in a new place?', category: 'travel'},
    {dialogue: 'How would you describe your pet personality', category: 'pet'}
  ]);
};
