'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    annotationId: { type: DataTypes.INTEGER, allowNull: false },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here,
    Comment.belongsTo(models.Annotation, { foreignKey: 'annotationId' }),
    Comment.belongsTo(models.User, {foreignKey: 'userId'}, )
  };
  return Comment;
};