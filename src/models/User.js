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

  User.associate = (models) => {
    // define o tipo de relacionamento
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'apelido_blog_posts' })
  };

  return User;
};

module.exports = UserModel;