const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

// Route for user registration
router.post('/register', userController.register);

// Route for user login
router.post('/login', userController.login);

module.exports = router;