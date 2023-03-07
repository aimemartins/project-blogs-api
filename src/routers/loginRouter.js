const express = require('express');
const { loginController } = require('../controllers/index');

const router = express.Router();

router.post('/', loginController);

module.exports = router;