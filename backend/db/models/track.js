'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING(100),
    artist: DataTypes.STRING(70),
    album: DataTypes.STRING(100)
  }, {});
  Track.associate = function(models) {
    Track.hasMany(models.Line, { foreignKey: 'trackId' })
  };
  return Track;
};