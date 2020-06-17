module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
    },
    password: DataTypes.TEXT,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Reply, {
      foreignKey: 'userId',
      as: 'replies',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
