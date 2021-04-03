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
          linetext: 'track 1 test',
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 1,
          linetext: 'track 1 test',
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 2,
          linetext: 'track 1 test',
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 3,
          linetext: 'track 1 test',
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 0,
          linetext: 'track 2 test',
          trackId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 1,
          linetext: 'track 2 test',
          trackId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 2,
          linetext: 'track 2 test',
          trackId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 0,
          linetext: 'track 3 test',
          trackId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 1,
          linetext: 'track 3 test',
          trackId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 1,
          linetext: 'Play it faster',
          trackId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 2,
          linetext: `We're not the first, I hope we're not the last`,
          trackId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ordernum: 4,
          linetext: `The time is so little, the time belongs to us`,
          trackId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      {
        ordernum: 5,
        linetext: `Why is everybody in such a fucking rush?`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 6,
        linetext: `Make do with what you have, take what you can get`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 7,
        linetext: `Pay no mind to us, we're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 8,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 9,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 10,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 11,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 12,
        linetext: `I was early to finish, I was late to start`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 13,
        linetext: `I might be an adult, but I'm a minor at heart`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 14,
        linetext: `It's not how old I am, it's how old I feel`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 15,
        linetext: `Take your time, try not to forget`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 16,
        linetext: `We never will, we're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 17,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 18,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 19,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 20,
        linetext: `We're just a minor threat`,
        trackId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordernum: 21,
        linetext: `That's a promise, ha ha`,
        trackId: 4,
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
      return queryInterface.bulkDelete('Lines', null, {});
  }
};
