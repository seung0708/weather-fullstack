const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Register
router.post('/signup', userController.signup);

// Login
router.post('/signin', userController.signin);

// Logout
router.post('/signout', userController.signout);

module.exports = router;
