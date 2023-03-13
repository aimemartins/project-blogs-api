const express = require('express');
const { postController } = require('../controllers/index');
const { validateToken, validatePost } = require('../middlewares/index');

const router = express.Router();

router.post('/', validateToken, validatePost, postController.createPost);

router.get('/', validateToken, postController.getPosts);

router.get('/:id', validateToken, postController.getPostById);

module.exports = router;