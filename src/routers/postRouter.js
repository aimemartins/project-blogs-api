const express = require('express');
const { postController } = require('../controllers/index');
const { validateToken, validatePost, validateUpdatePost } = require('../middlewares/index');

const router = express.Router();

router.post('/', validateToken, validatePost, postController.createPost);

router.get('/', validateToken, postController.getPosts);

router.get('/:id', validateToken, postController.getPostById);

router.put('/:id', validateUpdatePost, validateToken, postController.updatePost);

module.exports = router;