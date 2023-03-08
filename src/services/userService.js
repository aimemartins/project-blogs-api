const { User } = require('../models');

// uso na rota POST /login
const getByEmail = (email) => User.findOne({ where: { email } });

// uso na rota POST /user

const createUser = ({ displayName, email, password, image }) => User
.create({ displayName, email, password, image });

const getUsers = () => User.findAll({ attributes: { exclude: 'password' } });

const getUserById = (id) => User.findOne({ where: { id }, attributes: { exclude: 'password' } });

module.exports = {
  getByEmail,
  createUser,
  getUsers,
  getUserById,
};