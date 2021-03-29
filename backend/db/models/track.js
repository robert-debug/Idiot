'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};