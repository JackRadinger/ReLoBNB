const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Spot } = require('../../db/models');

const router = express.Router();


router.get(
    '',
    asyncHandler(async (req, res) => {
      const spots = await Spot.findAll();

      return res.json(
        spots
      );
    }),
);





module.exports = router;
