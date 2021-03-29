'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    body: { type: DataTypes.STRING, allowNull: false, },
    userId: DataTypes.INTEGER,
    lineId: DataTypes.INTEGER
  }, {});
  Annotation.associate = function(models) {
    // associations can be defined here
    Annotation.belongsTo(models.Line, { foreignKey: 'lineId' }),
    Annotation.belongsTo(models.User, { foreignKey: 'userId'}),
    Annotation.hasMany(models.Comment, { foreignKey: 'annotationId' })
  };
  return Annotation;
};