'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    trackId: { type: DataTypes.INTEGER, allowNull: false },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here,
    Comment.belongsTo(models.Track, { foreignKey: 'trackId' }),
    Comment.belongsTo(models.User, {foreignKey: 'userId'}, )
  };
  return Comment;
};