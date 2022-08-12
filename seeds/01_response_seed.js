/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('response').del()
  await knex('response').insert([
    {dialogue: 'If you can eat one meal for the rest of your life, what would it be and why?', category: 'Foodie'},
    {dialogue: 'If you are on vacation, what is the first thing you like to do when you arrive in a new place?', category: 'Loves to travel'},
    {dialogue: 'How would you describe your pet personality', category: 'Pet lover'},
    {dialogue: 'Lorem Ipsum FRIENDS', category: 'Friends oriented'},
    {dialogue: 'Lorem Ipsum OUTDOOR', category: 'Outdoorsy'},
    {dialogue: 'Lorem Ipsum HUMOR', category: 'Humorous'},
    {dialogue: 'Lorem Ipsum FAMILY', category: 'Family oriented'},
    {dialogue: 'Lorem Ipsum HOBBY', category: 'Passionate about personal hobbies'},
    {dialogue: 'Lorem Ipsum NEW THINGS', category: 'Open to trying new things'},
    {dialogue: 'Lorem Ipsum MUSIC', category: 'Music lover'},
    {dialogue: 'Lorem Ipsum NETFLIX', category: 'Netflix & Chill-er'},
    {dialogue: 'Lorem Ipsum HIKE', category: 'Planning the next hike'},
  ]);
};
