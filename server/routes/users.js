const express = require('express');
const passport = require('passport');
const router = express.Router();
const {showUserProfile} = require('../controllers/userController');

router.get('/users', () => console.log('users routes is working'))

router.get('/:id', showUserProfile);

module.exports = router;