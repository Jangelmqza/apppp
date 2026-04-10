exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('platforms').del();
  await knex('platforms').insert([
    { id: 1, name: 'Nintendo Entertainment System', manufacturer: 'Nintendo', year: 1983 },
    { id: 2, name: 'Super Nintendo Entertainment System', manufacturer: 'Nintendo', year: 1990 },
    { id: 3, name: 'Nintendo 64', manufacturer: 'Nintendo', year: 1996 },
    { id: 4, name: 'GameCube', manufacturer: 'Nintendo', year: 2001 },
    { id: 5, name: 'Wii', manufacturer: 'Nintendo', year: 2006 },
    { id: 6, name: 'Wii U', manufacturer: 'Nintendo', year: 2012 },
    { id: 7, name: 'Nintendo Switch', manufacturer: 'Nintendo', year: 2017 },
    { id: 8, name: 'PlayStation', manufacturer: 'Sony', year: 1994 },
    { id: 9, name: 'PlayStation 2', manufacturer: 'Sony', year: 2000 },
    { id: 10, name: 'PlayStation 3', manufacturer: 'Sony', year: 2006 },
    { id: 11, name: 'PlayStation 4', manufacturer: 'Sony', year: 2013 },
    { id: 12, name: 'PlayStation 5', manufacturer: 'Sony', year: 2020 },
    { id: 13, name: 'Xbox', manufacturer: 'Microsoft', year: 2001 },
    { id: 14, name: 'Xbox 360', manufacturer: 'Microsoft', year: 2005 },
    { id: 15, name: 'Xbox One', manufacturer: 'Microsoft', year: 2013 },
    { id: 16, name: 'Xbox Series X/S', manufacturer: 'Microsoft', year: 2020 },
    { id: 17, name: 'PC', manufacturer: 'Various', year: 1981 },
    { id: 18, name: 'Sega Genesis', manufacturer: 'Sega', year: 1988 },
    { id: 19, name: 'Sega Dreamcast', manufacturer: 'Sega', year: 1998 },
    { id: 20, name: 'Game Boy', manufacturer: 'Nintendo', year: 1989 },
    { id: 21, name: 'Nintendo DS', manufacturer: 'Nintendo', year: 2004 },
    { id: 22, name: 'PSP', manufacturer: 'Sony', year: 2004 }
  ]);
};
