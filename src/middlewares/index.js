const validateCategory = require('./validateCategory');
const validateToken = require('./validateToken');
const validateUser = require('./validateUser');
const validatePost = require('./validatePost');

module.exports = {
  validateToken, 
  validateUser, 
  validateCategory,
  validatePost,
};
