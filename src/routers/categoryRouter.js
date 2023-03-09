const express = require('express');
const { categoryController } = require('../controllers/index');
const validateCategory = require('../middlewares/validateCategory');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateCategory, categoryController.createCategory);

module.exports = router;