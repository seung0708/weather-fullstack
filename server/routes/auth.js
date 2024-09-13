const express = require('express');
const {signup, signin} = require('../controllers/authController');
const authRouter = express.Router();

const passport = require('passport');
const initializePassport = require('../passport-config');

// Initialize and use Passport for authentication
initializePassport(passport);
authRouter.use(passport.initialize());
authRouter.use(passport.session());

// Register
authRouter.post('/signup', signup);

// Login
authRouter.post('/signin', signin);


module.exports = authRouter;
