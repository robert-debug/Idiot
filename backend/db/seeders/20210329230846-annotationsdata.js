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
      return queryInterface.bulkInsert('Annotations', [
        {
          body: 'Something cool about this lyric',
          userId: 1,
          lineId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'pretty pretty cool.',
          userId: 1,
          lineId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'A bespoke hand crafted annotation.',
          userId: 2,
          lineId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'A bespoke hand crafted annotation.',
          userId: 3,
          lineId: 57,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'A bespoke hand crafted annotation.',
          userId: 3,
          lineId: 400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'A bespoke hand crafted annotation.',
          userId: 3,
          lineId: 1000,
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
      return queryInterface.bulkDelete('Annotations', null, {});
  }
};
