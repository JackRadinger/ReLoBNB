'use strict';
const faker = require('faker');

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
    return queryInterface.bulkInsert('Reviews', [
      {
      userId: 2,
      spotId: 2,
      rating: 4,
      comment: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      spotId: 2,
      rating: 4,
      comment: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      spotId: 2,
      rating: 4,
      comment: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      spotId: 2,
      rating: 4,
      comment: faker.random.words(),
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
