const express = require('express');
const router = express.Router();
const {showUserProfile} = require('../controllers/userController');
const { authenticate } = require('passport');

router.get('/profile', showUserProfile)