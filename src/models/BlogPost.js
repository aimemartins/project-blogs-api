const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    },



  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    // define o tipo de relacionamento
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' })
  };

  return BlogPost;
};

module.exports = BlogPostModel;