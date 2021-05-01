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
        spotId: 19,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg'
      },
      {
        spotId: 19,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(2).jpg'
      },
      {
        spotId: 19,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb(3).jpg'
      },
      {
        spotId: 20,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/ReLoBNB-Studio-Cabin.jpeg'
      },
      {
        spotId: 20,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/ReLoBNB-Studio-Cabin(1).jpeg'
      },
      {
        spotId: 20,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/ReLoBNB-Studio-Cabin(2).jpeg'
      },
      {
        spotId: 20,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/ReLoBNB-Studio-Cabin(3).jpeg'
      },
      {
        spotId: 20,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/ReLoBNB-Studio-Cabin(5).jpeg'
      },
      {
        spotId: 21,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Bright-and-Sunny.jpg'
      },
      {
        spotId: 21,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Bright-and-Sunny(1).jpg'
      },
      {
        spotId: 21,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Bright-and-Sunny(2).jpg'
      },
      {
        spotId: 21,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Bright-and-Sunny(3).jpg'
      },
      {
        spotId: 21,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Bright-and-Sunny(4).jpg'
      },
      {
        spotId: 22,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Civic-Center.webp'
      },
      {
        spotId: 22,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Civic-Center(1).webp'
      },
      {
        spotId: 22,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Civic-Center(2).webp'
      },
      {
        spotId: 22,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Civic-Center(3).webp'
      },
      {
        spotId: 22,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Civic-Center(4).webp'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room.jpg'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room(1).jpg'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room(2).jpg'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room(3).jpg'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room(4).jpg'
      },
      {
        spotId: 23,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Beautiful-SF-Room(5).jpg'
      },
      {
        spotId: 24,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/VISTA-HERMOSA.jpg'
      },
      {
        spotId: 24,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/VISTA-HERMOSA(1).jpg'
      },
      {
        spotId: 24,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/VISTA-HERMOSA(2).jpg'
      },
      {
        spotId: 24,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/VISTA-HERMOSA(6).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite.jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(1).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(2).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(3).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(4).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(5).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(6).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(7).jpg'
      },
      {
        spotId: 25,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Private-Suite(8).jpg'
      },
      {
        spotId: 26,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Pacific-NW.jpg'
      },
      {
        spotId: 26,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Pacific-NW(1).jpg'
      },
      {
        spotId: 26,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Pacific-NW(2).jpg'
      },
      {
        spotId: 26,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Pacific-NW(3).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room.jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(1).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(2).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(3).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(4).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(5).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(6).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(7).jpg'
      },
      {
        spotId: 27,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy-Room(8).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In.jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(1).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(2).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(3).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(4).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(5).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(6).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(7).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(8).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(9).jpg'
      },
      {
        spotId: 28,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Self-Check-In(10).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Maginificent-Mile.jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile.jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(1).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(2).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(3).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(4).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(5).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(6).jpg'
      },
      {
        spotId: 29,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Magnificent-Mile(7).jpg'
      },
      {
        spotId: 30,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy%2BConvenient.jpg'
      },
      {
        spotId: 30,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy%2BConvenient(1).jpg'
      },
      {
        spotId: 30,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy%2BConvenient(2).jpg'
      },
      {
        spotId: 30,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Cozy%2BConvenient(3).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle.jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(1).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(2).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(3).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(4).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(5).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(6).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(7).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(8).jpg'
      },
      {
        spotId: 31,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Historic-Castle(9).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey.jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(1).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(2).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(3).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(4).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(5).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(6).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(7).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(8).jpg'
      },
      {
        spotId: 32,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Loft-New-Jersey(9).jpg'
      },
      {
        spotId: 33,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Summer-Breeze.jpg'
      },
      {
        spotId: 33,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Summer-Breeze(1).jpg'
      },
      {
        spotId: 33,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Summer-Breeze(2).jpg'
      },
      {
        spotId: 33,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Summer-Breeze(3).jpg'
      },
      {
        spotId: 33,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Summer-Breeze(4).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King.jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(1).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(2).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(3).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(4).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(5).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(6).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(7).jpg'
      },
      {
        spotId: 34,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/City-King(8).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room.jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(1).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(2).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(3).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(4).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(5).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(6).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(7).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(8).jpg'
      },
      {
        spotId: 35,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/King-Room(9).jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas.jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas(1).jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas(2).jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas(3).jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas(4).jpg'
      },
      {
        spotId: 36,
        url: 'https://relobnb.s3.us-east-2.amazonaws.com/relonewseeddata/Rooftop-Dallas(5).jpg'
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
