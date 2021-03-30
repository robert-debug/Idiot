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
          body: 'test test test',
          userId: 1,
          lineId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'test test test tes test test test test test test test',
          userId: 1,
          lineId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'test test test',
          userId: 1,
          lineId: 3,
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
