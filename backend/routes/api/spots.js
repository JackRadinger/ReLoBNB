const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Spot, Image, Booking } = require('../../db/models');

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
  '/:id/images',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    console.log(req.params.id)
    const images = await Image.findAll({where: {spotId: id}});

    return res.json(
      images
    );
  }),
);





module.exports = router;
