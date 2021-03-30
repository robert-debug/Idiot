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
          lineId: 0
        },
        {
          body: 'test test test tes test test test test test test test',
          userId: 1,
          lineId: 1
        },
        {
          body: 'test test test',
          userId: 1,
          lineId: 3
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
