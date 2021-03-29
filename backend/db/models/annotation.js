'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    lineId: DataTypes.INTEGER
  }, {});
  Annotation.associate = function(models) {
    // associations can be defined here
  };
  return Annotation;
};