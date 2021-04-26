'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', [
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: faker.random.words(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
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
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
