exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genres').del();
  await knex('genres').insert([
    { id: 1, name: 'Action', description: 'Focuses on physical challenges, including hand-eye coordination and reaction-time.' },
    { id: 2, name: 'Adventure', description: 'The player assumes the role of a protagonist in an interactive story driven by exploration.' },
    { id: 3, name: 'RPG', description: 'Role-playing games where the player controls the actions of a character immersed in a well-defined world.' },
    { id: 4, name: 'Strategy', description: 'Focuses on skillful thinking and planning to achieve victory.' },
    { id: 5, name: 'Shooter', description: 'Focuses on the use of weapons, typically guns, to defeat enemies.' },
    { id: 6, name: 'Platformer', description: 'Focuses on jumping and climbing to navigate environments.' },
    { id: 7, name: 'Racing', description: 'The player participates in a racing competition with any type of land, water, air or space vehicles.' },
    { id: 8, name: 'Sports', description: 'Simulates the practice of sports.' },
    { id: 9, name: 'Puzzle', description: 'Focuses on solving puzzles.' },
    { id: 10, name: 'Fighting', description: 'Focuses on close combat between characters.' },
    { id: 11, name: 'Simulation', description: 'Designed to closely simulate real-world activities.' },
    { id: 12, name: 'Stealth', description: 'Focuses on avoiding detection to achieve objectives.' },
    { id: 13, name: 'Survival Horror', description: 'Focuses on survival in a horror-themed environment.' },
    { id: 14, name: 'MMORPG', description: 'Massively multiplayer online role-playing games.' },
    { id: 15, name: 'Battle Royale', description: 'Combines survival, exploration, and scavenging elements with last-man-standing gameplay.' }
  ]);
};
