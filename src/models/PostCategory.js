const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {

    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    // define o tipo de relacionamento
    models.Category.belongsToMany(models.BlogPost, {
      as: 'apelido_posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'apelido_categoty',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

  };

  return PostCategory;
};

module.exports = PostCategoryModel;