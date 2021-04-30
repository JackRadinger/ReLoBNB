const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Spot, Image, Booking, Review } = require('../../db/models');
const review = require('../../db/models/review');

const router = express.Router();


router.get(
    '/',
    asyncHandler(async (req, res) => {
      const spots = await Spot.findAll({ include: Image });

      return res.json(
        spots
      );
    }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const spot = await Spot.findByPk(id, {
      include: [
        { model: Image, required: false, where: { spotId: id}},
        { model: Booking, required: false, where: { spotId: id }}
      ],
    });
    console.log(spot)
    return res.json(
      spot
    );
  }),
);

router.get(
  '/:id/reviews',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const reviews = await Review.findAll({where: {spotId: id}, include: User, order: [['createdAt','ASC']] });

    return res.json(
      reviews
    );
  }),
);

router.post(
  '/:id/post/review',
  asyncHandler(async (req, res) => {
    const spotId = req.params.id
    const { userId, rating, comment } = req.body;

    const review = await Review.build({
      userId: userId,
      spotId: spotId,
      rating: rating,
      comment: comment,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await review.save()
    const newReview = await Review.findOne({where: {id: review.id}, include: User})
    return res.json(
      newReview
    );

  })
);

router.post(
  '/bookSpot',
  asyncHandler(async (req, res) => {
    const { userId, spotId, startDate, endDate } = req.body;

    const booking = await Booking.build({
      userId: userId,
      spotId: spotId,
      startDate: startDate,
      endDate: endDate,
      createdAt: new Date(),
    })

    await booking.save();
    return res.json(
      booking
    )
  })
)

router.delete(
  '/review/:id',
  asyncHandler(async (req,res) => {
    const id = req.params.id
    const review = await Review.findByPk(id);
    await review.destroy();

    return res.json()
  })
)





module.exports = router;
