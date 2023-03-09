const { Category } = require('../models');

const getById = (id) => Category.findByPk(id);

const createCategory = ({ name }) => Category.create({ name });

module.exports = {
  getById,
  createCategory,
};