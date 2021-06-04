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
        
        {ordernum: 0, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"I can no longer shop happily", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"I came in here for the special offer", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"Guaranteed personality", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"I wasn't born, so much as I fell out", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"Nobody seemed to notice me", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"We had a hedge back home in the suburbs", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"Over which I never could see", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"I heard the people who live on the ceiling", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"Scream and fight, most scarily", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"Hearing that noise was my first ever feelin'", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"That's how it's been, all around me", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"I'm all tuned in, I see all the programs", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"I save coupons from packets of tea", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"I've got my giant hit, discotheque album", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"I empty a bottle, I feel a bit free", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"The kids in halls and the pipes in the walls", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 18, linetext:"Making noises for company", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 19, linetext:"Long distance callers make long distance calls", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 20, linetext:"And the silence makes me lonely", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 21, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 22, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 23, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 24, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 25, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 26, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 27, linetext:"I'm all lost in the supermarket", trackId: 1, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
        
        {ordernum: 0, linetext:"Maybe in another life", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"I could find you there", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"Pulled away before your time", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"I can't deal, it's so unfair", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"[Chorus]", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"And it feels, and it feels like", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"Heaven is so far away", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"And it feels, yeah, it feels like", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"The world has grown cold", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"Now that you've gone away", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"[Verse 2]", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"Leaving flowers on your grave", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"Show that I still care", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"Black roses and Hail Mary's", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"Can't bring back what's taken from me", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 18, linetext:"[Pre-Chorus]", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 19, linetext:"I reach to the sky and call out your name", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 20, linetext:"And if I could trade, I would", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 21, linetext:"", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 22, linetext:"[Chorus]", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 23, linetext:"And it feels, and it feels like", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 24, linetext:"Heaven is so far away", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 25, linetext:"And it stings, yeah, it stings, now", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 26, linetext:"The world is so cold", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 27, linetext:"Now that you've gone away", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 28, linetext:"", trackId: 2, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
        
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
