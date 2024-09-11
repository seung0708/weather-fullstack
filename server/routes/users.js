const express = require('express');
const passport = require('passport');
const router = express.Router();
const {showUserProfile} = require('../controllers/userController');

router.get('/profile/:id', passport.authenticate('jwt', { session: false }), showUserProfile);

module.exports = router;