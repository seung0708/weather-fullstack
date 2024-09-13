const express = require('express');
const {signup, signin} = require('../controllers/authController');
const router = express.Router();

// Register
router.post('/signup', signup);

// Login
router.post('/signin', signin);


module.exports = router;
