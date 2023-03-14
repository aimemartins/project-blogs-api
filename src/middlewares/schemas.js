const Joi = require('joi');

const userSchema = Joi.object({

  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
    'string.required': '"displayName" is required',
  }),

  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
  }),

  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
    'string.required': '"password" is required',
  }),

  image: Joi.string(),

});

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'string.required': '"name" is required',
  }),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).messages({
  'string.required': 'Some required fields are missing',
  'array.required': 'Some required fields are missing',
});

const uptatePost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'string.required': 'Some required fields are missing',
});

module.exports = {
  userSchema,
  categorySchema,
  postSchema,
  uptatePost,
};