const validateCategory = require('./validateCategory');
const validateToken = require('./validateToken');
const validateUser = require('./validateUser');
const validatePost = require('./validatePost');
const validateUpdatePost = require('./validateUpdatePost');

module.exports = {
  validateToken, 
  validateUser, 
  validateCategory,
  validatePost,
  validateUpdatePost,
};
