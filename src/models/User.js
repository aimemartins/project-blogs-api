// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    image: DataTypes.STRING,

  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  return User;
};

module.exports = UserModel;