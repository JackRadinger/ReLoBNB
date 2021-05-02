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
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
      }),
      spotId: 19,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: 'The location is great and the amenities are perfect! It had everything needed to relax and enjoy the area.',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
      }),
      spotId: 19,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Thomas was great and very helpful with any questions we had! The location was as good as it can get with everything within 10 minutes! I would highly recommend staying here for any trip to Gatlinburg! We will be back!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
      }),
      spotId: 19,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: 'Amazing place ! Will come back again !!',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
      }),
      spotId: 19,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This town house was so perfect. Everything was clean, fully equipped, quiet. The location was perfect. I had a ball. All amenities were amazing. I have no bad reviews here.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
      }),
      spotId: 20,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This place is adorable. Really romantic and perfect for couples. It's in a very quiet and secluded location with amazing outdoor space - the sunset over the mountains is incredible. The hosts were very responsive and made sure that our stay was perfect. 10/10 experience.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 20,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "So happy with this cabin. The view was incredible, the hot tub is private and perfect. Definitely recommend.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 20,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This cabin is everything we could have ask for <3 It is tucked away in a very peaceful and serene location yet it is a short (and scenic) drive to many nearby attractions. The view from the deck is breathtaking! We had breakfast and dinner on the porch every day. It is perfect for a couple’s getaway! We enjoyed every minute of our stay in the Smoky Mountains! Pavan & Tracy were excellent hosts! They make the process very efficient and well organized. They were very responsive. The hot tub malfunctioned during our stay, they were quick to send someone out for maintenance and then refunded us for the inconvenience. We would 10/10 recommend!!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 21,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Graciela is a kind, professional and responsive host. The unit is sparkling clean, quiet, light-filled, and stylishly decorated. Convenient location for numerous takeout and delivery options and businesses with a southern facing view over the Van Ness/Civic Center corridor.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 21,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Wonderful hosts, clean modern space. The parking spot in the gated garage was so convenient too.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 21,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great studio apartment with nice furniture, it is fully equipped. It had everything I needed. The view from the window was spectacular. Really cool to look at the sunset at Civic Center. The building is big and secure, it is in the Tenderloin district where there are sometimes a lot of homeless, but the apartment was quiet and very nice to live in.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 22,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great host and a great location",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 23,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great value for a room in one of the best neighborhoods in SF. Very close to lots of good eateries, Golden Gate Park, and the beach. Having two bathrooms was nice, and in-unit laundry was a big perk.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 23,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Really enjoyed staying at Sergio’s place for a month. It’s in a great, walkable location and close to many amenities like Whole Foods, Target, and different restaurants and coffee shops. The studio is the perfect size and was equipped with all you would need to live and work in the space. Sergio made sure I got a tour of the entire building (laundry room, trash room, rooftop and BBQ area) and I was very thankful that he provided so many essential items in the studio such as a fan, towels, cleaning supplies, and trash bags. Overall, I had a great experience and would definitely book with him again.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 24,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Mark's place is great. Location is right off of the 101 with tons of stores and restaurants nearby. And also the room is cozy and clean, without any unnecessary items, which I really like. I would stay again without a doubt.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 24,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great host, highly recommended.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 24,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Mark's place is amazing and he is the most amazing host. I stayed +2 months and had the best experience. The condo is clean, secure, and beautiful. Mark is super nice, acommodating, and was so welcoming! I widely recommend!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 24,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Mark is a wonderful host! The condo complex is conveniently located off of the highway and has some great amenities including a gym, pool, etc. Highly recommended.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 25,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "I thoroughly enjoyed my long term stay at Jay’s rental. I had my boys with me so it was important that the location was as promised. Freeways were super close , grocery stores and laundromat was also very close by. The park was literally in the backyard and the view of the Downtown LA skyline at night was beautiful. He responded very quickly when contacted also. There is no cable but a $35 Amazon firestick solved all my woes as there is WiFi. The only drawback was parking was a little tough some days as it is street parking and it’s mostly apartment buildings in the neighborhood. Overall I give my stay 5 stars .",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 25,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Jay is a great person and very friendly. We liked the place very much and found no difficulty. Only detail is that Jay may take a while to respond, but nothing exaggerated. I would certainly rent again. Thank you Jay.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 25,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Jay is a fantastic guy providing a great space! Definitely recommend!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 25,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Jay is a wonderful host! The condo complex is conveniently located off of the highway and has some great amenities including a gym, pool, etc. Highly recommended.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 26,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This place is very comfortable, clean, and close to most of the major places in Seattle (such as Space Needle, Chihuly museum, Pike place market, etc.) As other ppl mentioned, the view is amazing. The picture he posted could not put the actual view I saw with my eyes haha. Although my expectation was high enough, I got surprised when I arrived this place. Alex is a great host. He is kind and thoughtful. Definitely recommend this place!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 26,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Alex is a great host. He's super nice and very accommodating. The space felt like home away from home and I can't even begin to say enough about the views. The location in Belltown is perfect for exploring what downtown has to offer as well as major attractions like the Space Needle and Pike Place Market.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 26,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great location both within Seattle and in the apartment, couldn't ask for a better room. Good for long or short-term stays.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 26,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Loved staying at Alex’s place! He was very friendly and welcoming. The space was clean and perfect for my stay. I would definitely stay here again.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 26,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "While I didn’t stay at Alex’s, my friend did (he and I were going to go up to Seattle for New Year’s but I ended up getting sick and staying back home in Portland) - he said the views were great and the place was nice! Great location, particularly for NYE as it is right by the Space Needle.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 27,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Nice place and good value.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 27,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great location and in a cute neighborhood. Definitely worth the value!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 27,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Staying here was perfect! It is very close to downtown and in a nice quiet neighborhood. Merardo was awesome and readily available for anything we needed. Would recommend to stay here when visiting.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 27,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Definitely a good clean place to stay! Definitely be back!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 28,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Very clean , great location and street parking was always available.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 28,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great location, really nice and considerate host.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 28,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Really a stylish place better than I expected. Sensational landlord's really nice neighborhood I advise this place a 5 out of 5.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 28,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "If you're used to staying in hostels, this place will feel comfortable for you. There are 5 small bedrooms in the space, and I didn't see anyone else who was staying there. I could hear my closest neighbor, as the rooms are close enough to each other. There are 2 shared bathrooms, which is nice, and the place is very secure. Edward and hosts responded quickly with any questions I had and made sure I was able to check in okay, and that everything was quiet and comfortable enough. If you're just here for work and need a place to sleep, this place is great.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 28,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Comfortable room with the necessities for a short stay.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 29,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "When I booked with Edward I was extremely nervous due to not being familiar with the Chicago area. Truth be told, I was very uncomfortable with my situation in the first place (traveling for work). However, the communication was super fast! It was nice being able to get quick responses in regards to my numerous questions. I can confirm that parking is free - and that I easily found a spot every time on their street. Rooms are very small - but thoughtful and functional. I can only speak for myself in regards to location as it was close to MY destination for work which was near CDPH. I also felt VERY safe. They have security cameras in the common spaces as well as for outside, and many of the neighbors I saw were couples or families. And it may not be listed, but I wanted to say that there are TWO bathrooms for use - not just one which is awesome! If anything, the heating and cooling was a bit funky. The common spaces were cooler; sometimes it seemed my bedroom would really heat up, and I had to open my door to let cool air in frequently. Overall, 10/10 for the value, and I would definitely stay here many times over again! Great, wonderful hosts; daily cleaning; updated kitchen; free, accessible parking; safe property.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 29,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Booking was easy and fast, and it was very clean and quite!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 29,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Everything was as expected. Would stay again.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 29,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great hospitality",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 29,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "The self check in was super easy with detailed instructions. The place was very clean and the other guests that were staying there were super nice which made the stay even better!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 30,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Pat’s place is a great place not far from lake, Gold Coast magnificent mile and Chicago river walk.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 30,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Very nice place. Stayed there for the second time.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 30,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great place to stay!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 30,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great place, I highly recommend",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 30,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Privacy of a hotel, amenities and personal touch of a bnb, and the international clientele and socialization of a hostel. Cozy, clean, and better equipped than one could ever anticipate, you'll need for nothing here. Everybody is extremely kind and helpful and full of interesting stories, to boot! I can't wait to come back",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 31,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Place was cool, quiet & lots of room to stretch out after a long train ride to Pittsburgh. Really dig the location of it and Zach is very informative guy.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 31,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "ALMOST perfect place, great location to walk around and see everything! Room was a good size and included a simple kitchen, bathroom and living area. Location was easy to get to and parking is right across the street. Only thing bad was the quality of cleanliness, rugs were a bit dirty, and surfaces didn’t seem to have been wiped down enough. Overall I would recommend and stay here again.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 31,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This place was in a perfect location! The parking next door for overnight was $30 which was a little pricy but it was worth it considering how close it was to the building. Zach was very responsive and gave all of the detail needed for a seamless stay. Would stay again!!!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 31,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great place to stay",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 31,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Seems like it use to be a hostel, smelled like cigarette smoke. The environment was not pleasant but it was cheap! Beds are uncomfortable.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "AMAZING VIEWS, super cool part of town, right next to Randyland and north side, Milty had the place looking amazing and it was a super comfortable stay",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Cute apartment, incredible view, would definitely stay here again!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Milty's place is rad. Very unique. Amazing views. Unbelievably high ceilings! Cool spot for sure! Check it out!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great space, with great view. Communication was ideal and we had a blast.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Fantastic place! really enjoyed it. The view was absolutely stunning and it was easy access to downtown. Would definitely stay again!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 32,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Nice place overall enjoyed my time definitely would recommend",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 33,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Detroit International House is a highly recommended place if you are looking for something near New York city. The house is about 30mins from Time Square and also have this english learning program where you can take english classes and make friends at the same time. Highly Recommended",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 33,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Try to request the host to allow you to check the place before you pay as its pictures may vary",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 33,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "This was one of the best stays in airbnb for me ever. First the place is shared rooms so if you are okay with that so this is the best choice for you. The place is just 25 mins to NY manhatten and the bus is just in front of the house. It is very clean and the host Karen is really a kind person she is always replying to any requests super fast. You also get a chance to meet different people from all over the world and try nice food innthe community meal. It is very Cozy and just felt like a small home.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 34,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Lovely location. Lovely room. The Rooftop bar is really cool. The staff is very kind and friendly and I enjoyed my stay! Additionally, the view from the room was great.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 34,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great stay, would definitely return!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 34,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Much better than expected, rooms are a little small but they are really clean and have a very efficient layout. Extended my stay everyday for about 5 days because I was very comfortable there. The staff is very welcoming!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 34,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Chic little spaces to rest after a day of urban exploration",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 34,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great location but expect a lot of activity since the lobby is open to the public",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 35,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "enjoyed my stay. the view was good as well",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 35,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "great youthful and vibrant vibe, definitely book if you have the opportunity.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 35,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Always stay here for work in the city, great spot great location, Excellent customer service",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 35,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Be mindful Room is very small but nice for one or two ppl. Decent views",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 36,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Great place just as advertised. Braden was very responsive and accommodating throughout the entire stay. He even refunded me for the dryer not working! Great location just steps to White Rock Lake!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 36,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "I had a wonderful experience in this lovely condo. It's in the perfect location close to shopping, restaurants, and the expressway. The condo community is clean, quiet and the neighbors are so sweet. It was a perfect stay.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 36,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "The unit is clean, comfortable, and quiet. Braden is a very responsive host and I hope to rent there again when in Dallas.",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: faker.datatype.number({
        'min': 1,
        'max': 8
        }),
      spotId: 36,
      rating: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
      comment: "Cozy. Warm. Inviting. Very much a homey environment. Super cute little back patio perfect for reading. Pool is lovely. All the neighbors are so kind and friendly. Very very quiet. I felt so safe! Minutes from the white rock lake, close to a bunch restaurants/grocery store! Very clean. Awesome kitchen.",
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
