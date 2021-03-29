'use strict';
module.exports = (sequelize, DataTypes) => {
  const Line = sequelize.define('Line', {
    ordernum: DataTypes.INTEGER,
    linetext: DataTypes.STRING,
    trackId: DataTypes.INTEGER
  }, {});
  Line.associate = function(models) {
    // associations can be defined here
    Line.belongsTo(models.Track, { foreignKey: 'trackId'}),
    Line.hasOne(models.Annotations, {foreignKey: 'lineId'})
  };
  return Line;
};