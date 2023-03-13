const { BlogPost, User, Category } = require('../models');

const createPost = ({ title, content, categoryIds }) => BlogPost
.create({ title, content, categoryIds });

const getPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getPostById = (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
