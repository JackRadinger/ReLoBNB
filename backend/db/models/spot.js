'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cost: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lat: {
      type: Sequelize.NUMERIC,
      allowNull: false
    },
    long: {
      type: Sequelize.NUMERIC,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Spot.associate = function(models) {
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
    Spot.hasMany(models.Image, { foreignKey: 'spotId' });
  };
  return Spot;
};
