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
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 2,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 2,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 2,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 3,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 3,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 3,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 4,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 4,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 4,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 5,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 5,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 5,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 6,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 6,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 6,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 7,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 7,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 7,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 8,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 8,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 8,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 9,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 9,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 9,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 10,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 10,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 10,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 11,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 11,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 11,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
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
    return queryInterface.bulkDelete('Images', null, {});
  }
};
