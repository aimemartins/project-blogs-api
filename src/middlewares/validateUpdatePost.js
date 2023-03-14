const { uptatePost } = require('./schemas');

const validateUpdatePost = (req, res, next) => {
  const { title, content } = req.body;

  const { error } = uptatePost.validate({ title, content });

  if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = validateUpdatePost;