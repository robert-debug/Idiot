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
          title: 'No Time to Test',
          artist: 'Johnny Test and the Testerinos',
          album: 'Never Mind the Tests',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Lost in the Test',
          artist: 'The Test',
          album: 'London Testing',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bad Test',
          artist: 'Lady Test',
          album: 'Test Monster',
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
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};