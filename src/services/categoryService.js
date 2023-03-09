const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};