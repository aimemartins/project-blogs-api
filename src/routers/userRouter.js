const express = require('express');
const { userController } = require('../controllers/index');
const { validateToken, validateUser } = require('../middlewares/index');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

router.get('/', validateToken, userController.getUsers);

router.get('/:id', validateToken, userController.getUserById);

module.exports = router;