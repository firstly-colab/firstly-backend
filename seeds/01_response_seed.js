/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('response').del()
  await knex('response').insert([
    {dialogue: "If you can eat one meal for the rest of your life, what would it be and why?", category: 'Foodie'},
    {dialogue: "If you are on vacation, what is the first thing you like to do when you arrive in a new place?", category: 'Loves to travel'},
    {dialogue: "How would you describe your pet personality?", category: 'Pet lover'},
    {dialogue: "Which friend would you most likely have to bail out from jail?", category: 'Friends oriented'},
    {dialogue: "What's the craziest memory you have with your best friend(s)?", category: 'Friends oriented'},
    {dialogue: 'What would you rather: mountains, forest, ocean? Why?', category: 'Outdoorsy'},
    {dialogue: "What's the most embarrassing way you've been injured?", category: 'Humorous'},
    {dialogue: "What's your most useless talent?", category: 'Humorous'},
    {dialogue: "What's the best advice you've ever received from a family member?", category: 'Family oriented'},
    {dialogue: 'Are you working on any personal passion projects?', category: 'Passionate about personal hobbies'},
    {dialogue: "What's something you've always been curious to try but haven't yet?", category: 'Open to trying new things'},
    {dialogue: 'What would be your 3 go-to songs for a karaoke night?', category: 'Music lover'},
    {dialogue: 'If you can spend a whole day with a character from your favorite TV show, who would it be and why? ', category: 'Netflix & Chill-er'},
    {dialogue: "What was the hardest hike you did that you're most proud of?", category: 'Planning the next hike'},
  ]);
};
