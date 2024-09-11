const express = require('express');
const {signup, signin} = require('../controllers/authController');
const router = express.Router();

// Register
router.post('/signup', signup);

// Login
router.post('/signin', signin);

// Logout
//router.post('/signout', userController.signout);


module.exports = router;
