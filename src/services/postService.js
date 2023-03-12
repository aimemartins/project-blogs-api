const { BlogPost, User, Category } = require('../models');

const createPost = ({ title, content, categoryIds }) => BlogPost
.create({ title, content, categoryIds });

const getPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'apelido_users' },
    { model: Category, as: 'apelido_categoty', through: { attributes: [] } },
  ],
});

module.exports = {
  createPost,
  getPosts,
};
