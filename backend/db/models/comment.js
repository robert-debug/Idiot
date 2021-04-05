'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: { type: DataTypes.STRING, allowNull: false },
    userId: DataTypes.INTEGER,
    annotationId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here,
    Comment.belongsTo(models.Annotation, { foreignKey: 'annotationId' }),
    Comment.belongsTo(models.User, {foreignKey: 'userId'}, )
  };
  return Comment;
};