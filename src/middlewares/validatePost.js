const { postSchema } = require('./schemas');

const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = postSchema.validate({ title, content, categoryIds });

  if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = validatePost;