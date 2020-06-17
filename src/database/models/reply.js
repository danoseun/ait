module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    content: {
      type: DataTypes.TEXT
    },
    commentId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Reply.associate = (models) => {
    // associations can be defined here
    Reply.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'replier',
      onDelete: 'CASCADE',
    });

    Reply.belongsTo(models.Comment, {
      foreignKey: 'commentId',
      as: 'reply',
      onDelete: 'CASCADE',
    });
  };
  return Reply;
};
