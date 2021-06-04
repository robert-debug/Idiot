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
        
        {ordernum: 0, linetext:"That girl thinks she's the queen of the neighborhood", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"She's got the hottest trike in town", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"Rebel girl, rebel girl", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"Rebel girl you are the queen of my world", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"Rebel girl, rebel girl", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"I think I wanna take you home", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"I wanna try on your clothes, uh", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"When she talks, I hear the revolution", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"In her hips, there's revolution", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"When she walks, the revolution's coming", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"In her kiss, I taste the revolution", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"I know I wanna take you home", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"I wanna try on your clothes, uh", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"I got news for you, she is!", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"They say she's a dyke, but I know", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"She is my best friend, yeah", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"Love you like a sister always", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"Soul sister", trackId: 3, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"},
        
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

      {ordernum: 0, linetext:"Lobotomy", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"Lobotomy", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"Lobotomy", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"Lobotomy", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"D.D.T. did a job on me", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"Now I am a real sickie", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"Now I guess I'll have to tell 'em", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"That I got no cerebellum", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"Gonna get my Ph.D", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"I'm a teenage lobotomy", trackId: 5, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
      {ordernum: 0, linetext:"I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"I don't need your authority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"Down with the moral majority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"I pledge allegiance to the underworld", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"One nation under dog, there of which I stand alone", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"A face in the crowd unsung against the mold", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"I don't need your authority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"Down with the moral majority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"Stepped out of the line", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"Like a sheep runs from the herd", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"Marching out of time", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"To my own beat, now", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"The only way I know", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"A free-for-all, fuck 'em all, you are your own sight", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 18, linetext:"I don't need your authority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 19, linetext:"Down with the moral majority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 20, linetext:"'Cause I wanna be the minority (Hey!)", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 21, linetext:"A free-for-all, fuck 'em all, you are your own sight", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 22, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 23, linetext:"I don't need your authority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 24, linetext:"Down with the moral majority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 25, linetext:"'Cause I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 26, linetext:"I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 27, linetext:"I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 28, linetext:"I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 29, linetext:"I wanna be the minority", trackId: 6, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
      {ordernum: 0, linetext:"Jealous cowards try to control", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"They distort what we say", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"Try and stop what we do", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"When they can't do it themselves", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"[Chorus]", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"We are tired of your abuse", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"Try to stop us, it's no use", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"[Verse 2]", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"Society's arms of control", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"Think they're smart, can't think for themselves", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 18, linetext:"Laugh at us behind our backs", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 19, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 20, linetext:"I find satisfaction in what they lack", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 21, linetext:"Rise above! We're gonna rise above!", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 22, linetext:"", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 23, linetext:"[Chorus]", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 24, linetext:"We are tired of your abuse", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 25, linetext:"Try to stop us, it's no use", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 26, linetext:"", trackId: 7, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
      {ordernum: 0, linetext:"[Intro]", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 1, linetext:"Oh, all I want to know", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 2, linetext:"All I want", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 3, linetext:"", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 4, linetext:"[Verse 1]", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 5, linetext:"With just a touch of my burning hand", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 6, linetext:"I send my astro zombies to rape this land", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 7, linetext:"Prime directive, exterminate the whole human race", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 8, linetext:"And your face drops in a pile of flesh", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 9, linetext:"And then your heart, heart pounds 'til it pumps in death", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 10, linetext:"Prime directive, exterminate whatever stands left", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 11, linetext:"", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 12, linetext:"[Chorus]", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 13, linetext:"All I wanted to say, and all I gotta do", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 14, linetext:"Who'd I do this for? Hey, me or you?", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 15, linetext:"And all I wanted to say, and all I gotta do", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 16, linetext:"Who'd I do this for? Hey, me or you?", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 17, linetext:"", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 18, linetext:"[Bridge]", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 19, linetext:"Oh, all I want to know", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 20, linetext:"All I want", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 21, linetext:"", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 22, linetext:"[Verse 2]", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 23, linetext:"With just a touch of my burning hand", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 24, linetext:"I'm gonna live my life to destroy your world", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 25, linetext:"Prime directive, exterminate the whole fucking race", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 26, linetext:"Then your face drops in a pile of flesh", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 27, linetext:"And then your heart, heart pounds 'til it pumps in death", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 28, linetext:"Prime directive, exterminate this whole fucking place, well", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, {ordernum: 29, linetext:"", trackId: 8, createdAt: "2021-06-04 10:10:32.766-04", updatedAt:"2021-06-04 10:10:32.766-04"}, 
      



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
