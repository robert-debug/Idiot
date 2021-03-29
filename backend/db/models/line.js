'use strict';
module.exports = (sequelize, DataTypes) => {
  const Line = sequelize.define('Line', {
    order - num: DataTypes.INTEGER,
    line - text: DataTypes.STRING,
    trackId: DataTypes.INTEGER
  }, {});
  Line.associate = function(models) {
    // associations can be defined here
  };
  return Line;
};