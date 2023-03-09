const express = require('express');
const { categoryController } = require('../controllers/index');
const { validateToken, validateCategory } = require('../middlewares/index');

const router = express.Router();

router.post('/', validateToken, validateCategory, categoryController.createCategory);

router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;