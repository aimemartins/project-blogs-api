const express = require('express');
const { userController } = require('../controllers/index');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

router.get('/', validateToken, userController.getUsers);

module.exports = router;