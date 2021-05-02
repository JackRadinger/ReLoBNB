'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', [
        {
        id: 19,
        title: 'Beautiful 1 bedroom Townhome at Gatlinburg, TN',
        cost: 69,
        description: 'A beautiful apartment in the Smokies. Ideal to sit back with your family and to enjoy the beautiful town of Gatlinburg, Tennessee. Gatlinburg offers wonderful trekking paths, distilleries, and a mild climate throughout the year.',
        address: faker.address.streetAddress(),
        city: 'Gatlinburg',
        state: 'Tennessee',
        zip: 37738,
        country: 'United States',
        lat: 35.7143,
        long: -83.5102,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 20,
        title: 'Cute Studio Cabin! Views! Private. Hot Tub. Relax!',
        cost: 109,
        description: 'Hot tub honeymoon cabin with deck for sunbathing and indoor jacuzzi. Love Shack is a 1 bedroom, 1 bath, studio style cabin. It features a comfy handmade King bed. Relax and unwind: lots of nature with 7 acres of woods around you. Kitchen and swing. Fireside rockers. Sunset Mountain Views! Just for two people in love.',
        address: faker.address.streetAddress(),
        city: 'Gatlinburg',
        state: 'Tennessee',
        zip: 37738,
        lat: 35.7143,
        long: -83.5102,
        country: 'United States',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 21,
        title: 'Bright and Sunny Bedroom in Inner Sunset',
        cost: 30,
        description: 'Bright and sunny room near public transportation such as bus 29, 28, and the light rail N-Judah, making commute super easy. There are plenty of cute boutiques and eateries nearby. Golden Gate Park is also close by for outdoor festivals and concerts.',
        address: faker.address.streetAddress(),
        city: 'San Francisco',
        state: 'California',
        zip: 94016,
        lat: 37.7749,
        long: -122.4194,
        country: 'United States',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 22,
        title: faker.address.streetName(),
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: 'Civic Center Views from a Contemporary City Pad and Parking',
        address: faker.address.streetAddress(),
        city: 'San Francisco',
        state: 'California',
        zip: 94016,
        lat: 37.7749,
        long: -122.4194,
        country: 'United States',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 23,
        title: 'Beautiful SF Room with Bay Window Downtown Views',
        cost: 59,
        description: "Beautiful room with amazing views in the safe and clean Noe Valley neighborhood of San Francisco available for monthly rental. Inside the room you'll find a comfy queen size bed, workstation desk and chair, TV, and wardrobe. Apartment has a living room and a fully stacked kitchen with dining area. Shared bathroom. Dishwasher, washer, and dryer. This room is for single occupancy.",
        address: faker.address.streetAddress(),
        city: 'San Francisco',
        state: 'California',
        zip: 94016,
        lat: 37.7749,
        long: -122.4194,
        country: 'United States',
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 24,
        title: 'VISTA HERMOSA PARK SIDE APT 159',
        cost: 33,
        description: "Charming 1 bedroom & bathroom in the heart of Downtown Los Angeles. The unit is shrouded by the Vista Hermosa Park treeline. The unit includes a refrigerator and stove. Hardwood and tile floors. Heater and Air Conditioner . Street parking. It is two miles from the LA city hall. you can easily visit the sights of downtown ,Dodger Stadium, Walt Disney Concert Hall and Stapler Center are 10 minutes drive from the APT. The host is short and simple to answer because English is a second language.",
        address: faker.address.streetAddress(),
        city: 'Los Angeles',
        state: 'California',
        zip: 90001,
        lat: 34.0522,
        long: -118.2437,
        country: 'United States',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 25,
        title: 'Private Suite in Resort-Style Condo',
        cost: 45,
        description: "Private bedroom and bathroom in completely remodeled 2-bedroom condominium in gated full-service complex. Full use of kitchen and living room. Amenities include: Washer/dryer; resort-style pool with jacuzzi (open until 10:00 pm weekdays/11:00 pm weekends); gym; tennis courts; indoor basketball and racquetball; reserved parking; and 24-hour security. Located in dynamic Woodland Hills area of Los Angeles. Close to several quality restaurants, supermarkets, movie theaters and new mall.",
        address: faker.address.streetAddress(),
        city: 'Los Angeles',
        state: 'California',
        zip: 90001,
        lat: 34.0522,
        long: -118.2437,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 26,
        title: 'Pacific NW Room w/ own bathroom in Wallingford',
        cost: 46,
        description: "Enjoy a King bed, period antique decor, a private bathroom & access to a beautiful new kitchen, dining & living rooms. This Pacific North West themed getaway is located in Wallingford, a classic walkable neighborhood near some of Seattle's best restaurants, bars, dispensaries, coffee houses & shops.",
        address: faker.address.streetAddress(),
        city: 'Seattle',
        state: 'Washington',
        zip: 98101,
        lat: 47.6062,
        long: -122.3321,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 27,
        title: 'Cozy room with beautiful views | Walk everywhere',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "Welcome to high end living in Seattle! Perfectly located in the Belltown neighborhood of downtown, you'll be a quick walk away from all the city has to offer: 3 min - Cafes, Bars, Food, etc., 10m - Space Needle, 15m - Pike Place Market, Safeway, Dick's Burgers, Amazon Offices, 25m - Pioneer Square, Sculpture Park + trails is right across the street ",
        address: faker.address.streetAddress(),
        city: 'Seattle',
        state: 'Washington',
        zip: 98101,
        lat: 47.6062,
        long: -122.3321,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 28,
        title: 'Self check in near Downtown Chicago',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        address: faker.address.streetAddress(),
        description: "Recently renovated, enjoy the comfort of staying on a brand new home with everything brand new. Brand new mattress, comforters, sheets, towels and everything else! Each room is equipped with Smart TV with Netflix included, expensive luxury mattresses with 4 layers sheets & comforters bed setup, air conditioning with air humidifier, high speed internet and so much more! Convenient location close to downtown Chicago, Chinatown, White Sox, Pilsen, South Loop & McCormick Convention Center.",
        city: 'Chicago',
        state: 'Illinois',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 41.8119,
        long: -87.6298,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 29,
        title: '*Magnificent Mile Chicago Condo*',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "Furnished One Bedroom and One Bath, Open Layout Floor Plan Condo with Great Closet Space Located on The Magnificent Mile! Open Kitchen with Granite Counters & Counter Island That Opens Up to The Living and Dining Rooms. Building Amenities Include 24-Hour Doorman, Sundeck and A Just Renovated Outdoor Pool. Full, Well Equipped Gym, Business Center, Theater and Party Room. Great Neighbors and Best Chicago Neighborhood. Located on The Mile, steps from The Loop, Navy Pier, and Chicago Beaches!",
        address: faker.address.streetAddress(),
        city: 'Chicago',
        state: 'Illinois',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 41.8119,
        long: -87.6298,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 30,
        title: 'Cozy + Convenient | Downtown | Walk Everywhere',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "Stay in Downtown Pittsburgh at our simple and colorful efficiency apartments! Enjoy the convenience of an entirely private bedroom, bathroom, and kitchen. Originally designed as collegiate suites, our homes now serve as the most affordable stay in Downtown Pittsburgh. We specialize in hosting conference goers, sport and art enthusiasts, tourists, and business travelers. Clean. Convenient. Affordable. Desirable Location. Please note: Listed price is our best price and the lowest downtown guaranteed.",
        address: faker.address.streetAddress(),
        city: 'Pittsburgh',
        state: 'Pennsylvania',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.4406,
        long: -79.9959,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 31,
        title: 'The Historic Castle Estate',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "The Castle Estate stands overlooking Downtown Pittsburgh. The view is spectacular. I’m available 24/7 for any needs or concerns. We have a parking space for you. Our grounds are spacious and beautiful. The estate is green and the kind of open space that you typically won’t find in the middle of the city. I have bikes and helmets that you can borrow to explore the city. This apartment is really one-of-a-kind. The ceilings are 15 feet! You're going to love it!",
        address: faker.address.streetAddress(),
        city: 'Pittsburgh',
        state: 'Pennsylvania',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.4406,
        long: -79.9959,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 32,
        title: 'Loft Brief Distance from NYC!',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: 'THIS APARTMENT IS THOROUGHLY CLEANED INSIDE AND OUT AND DISINFECTED THREE TIMES. THERE ARE ZERO REPORTED CASES OF COVID-19 IN THE BUILDING. The apartment is fully renovated and just finished this year! It is only a 30 minute commute to the World Trade Center in New York City.',
        address: faker.address.streetAddress(),
        city: 'Jersey CIty',
        state: 'New Jersey',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.0583,
        long: -74.4057,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 33,
        title: "summer breeze - 2 bedroom apartment Backyard Grand 8/9 Private Bathroom Private Kitchen",
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "Stay in a quiet, peaceful location just a short train ride from the heart of New York City. Enjoy your own 2-bedroom apartment with a full bathroom and a private entrance. The apartment has a kitchen and a living room with sofas and a TV so you can cook your own meals and relax in comfort and style. Our place is only a 2-minute walk from a light rail station and minutes from NYC’s best attractions, like the Statue of Liberty, Ellis Island, and Wall Street.",
        address: faker.address.streetAddress(),
        city: 'Jersey City',
        state: 'New Jersey',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.0583,
        long: -74.4057,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 34,
        title: 'City King',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "The hotel’s City King rooms provide sweeping views over the neighborhood’s distinctive cast-iron architecture and fashion-forward boutiques and restaurants. The calming, neutral palate of whites and grays, with rich wooden millwork accents, creating an inviting, warm space. Solid walnut furniture, glass-enclosed rain showers and handmade porcelain tiles make up the first-rate design of the rooms, while convenient amenities like electronically-controlled shades and lighting, bluetooth radio and USB charging stations complete the experience.",
        address: faker.address.streetAddress(),
        city: 'New York',
        state: 'New York',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.7128,
        long: -74.0060,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 35,
        title: 'King Room City',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: "Located North of Madison Square Park and just a short walk from the Empire State Building, Arlo Hotel NoMad has thoughtfully designed guest rooms with playful touches. The first two floors offer inviting communal spaces, including Lamalo a Middle Eastern restaurant and BARlo, an innovative cocktail bar. Enjoy expansive views and custom mixed beverages from our 31st floor rooftop bar “A.R.T.” Arlo NoMad welcomes you to stop in and stay a while. Don't forget to check out our curated guidebook!",
        address: faker.address.streetAddress(),
        city: 'New York',
        state: 'New York',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 40.7128,
        long: -74.0060,
        country: 'United States',
        userId: faker.datatype.number({
          'min': 2,
          'max': 7
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: 36,
        title: 'Rooftop Downtown Dallas',
        cost: faker.datatype.number({
          'min': 10,
          'max': 50
        }),
        description: 'One bedroom, one bath in downtown Dallas. Beautiful rooftop view.',
        address: faker.address.streetAddress(),
        city: 'Dallas',
        state: 'Texas',
        zip: faker.datatype.number({
          'min': 10000,
          'max': 99999
        }),
        lat: 32.7767,
        long: -96.7970,
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
