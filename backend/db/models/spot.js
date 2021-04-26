'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    cost: DataTypes.NUMERIC,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.NUMERIC,
    country: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    // Spot.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Spot;
};
