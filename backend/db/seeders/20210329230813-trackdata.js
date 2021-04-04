'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Tracks', [
        {
          title: 'Lost in the Supermarket',
          artist: 'The Clash',
          album: 'London Calling',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gone Away',
          artist: 'The Offspring',
          album: 'Ixnay on the Hombre',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Rebel Girl',
          artist: 'Bikini Kill',
          album: 'Yeah Yeah Yeah Yeah',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Minor Threat',
          artist: 'Minor Threat',
          album: 'Minor Threat',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Teenage Lobotomy',
          artist: 'The Ramones',
          album: 'Rocket to Russia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Minority',
          artist: 'Green Day',
          album: 'Warning',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Rise Above',
          artist: 'Black Flag',
          album: 'Damaged',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'AstroZombies',
          artist: 'Misfits',
          album: 'Walk Among Us',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Hit or Miss',
          artist: 'New Found Glory',
          album: 'New Found Glory',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Centuries',
          artist: 'Fall Out Boy',
          album: 'Centuries',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Moon Over Marin',
          artist: 'Dead Kennedys',
          album: 'Plastic Surgery Disasters',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Linoleum',
          artist: 'NOFX',
          album: 'Punk in Drublic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Attitude',
          artist: 'Bad Brains',
          album: 'Bad Brains',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'American Jesus',
          artist: 'Bad Religion',
          album: 'Recipe for Hate',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: `I'm the Boss of Me`,
          artist: 'The Vandals',
          album: 'Look What I Almost Stepped In',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gimme Brains',
          artist: 'Bratmobile',
          album: 'Ladies, Women and Girls',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Blink',
          artist: 'Blink-182',
          album: 'Enema of the State',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Middle',
          artist: 'Jimmy Eat World',
          album: 'Bleed American',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Modern Girl',
          artist: 'Sleater Kinney',
          album: 'The Woods',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Doll Face on the Calico Highway',
          artist: 'Guerilla Toss',
          album: 'Eraser Stargazer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fairytale of New York',
          artist: 'The Pogues',
          album: 'If I Should Fall from Grace with God',
          createdAt: new Date(),
          updatedAt: new Date()
        },


        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
