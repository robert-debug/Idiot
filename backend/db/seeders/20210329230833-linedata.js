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
      return queryInterface.bulkInsert('Lines', [
        {
          ordernum: 0,
          linetext: 'test test test test test test',
          trackId: 1
        },
        {
          ordernum: 1,
          linetext: 'test test test test test test',
          trackId: 1
        },
        {
          ordernum: 2,
          linetext: 'test test test test test test',
          trackId: 1
        },
        {
          ordernum: 3,
          linetext: 'test test test test test test',
          trackId: 1
        },
        {
          ordernum: 0,
          linetext: 'test test test test test test',
          trackId: 2
        },
        {
          ordernum: 1,
          linetext: 'test test test test test test',
          trackId: 2
        },
        {
          ordernum: 2,
          linetext: 'test test test test test test',
          trackId: 2
        },
        {
          ordernum: 0,
          linetext: 'test test test test test test',
          trackId: 3
        },
        {
          ordernum: 1,
          linetext: 'test test test test test test',
          trackId: 3
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
      return queryInterface.bulkDelete('People', null, {});
  }
};
