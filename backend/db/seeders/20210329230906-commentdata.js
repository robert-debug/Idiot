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
      return queryInterface.bulkInsert('Comments', [
        {
          body: 'This is a one of my favortie songs!',
          userId: 1,
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'I remember this song from the movie "Over the Hedge"',
          userId: 2,
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'That is super lame.',
          userId: 3,
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'First.',
          userId: 3,
          trackId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'First.',
          userId: 3,
          trackId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Generating comments is harder than you think',
          userId: 1,
          trackId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'This is not a faker comment, it is bespoke and hand crafted.',
          userId: 2,
          trackId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'This is a bop.',
          userId: 2,
          trackId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Really?',
          userId: 3,
          trackId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
