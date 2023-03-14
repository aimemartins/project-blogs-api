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

const updatePost = async (id, { title, content }) => {
  // selecionar o post da pessoa pelo id
  // const post = await BlogPost.findOne({where: {id}});
  const editPost = await BlogPost.update({ title, content }, { where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

    return editPost;
  // editar o post
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};
