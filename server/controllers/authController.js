const { createUser, findUserById} = require('../models/userModel');
const passport = require('passport');

// Register a new user
const signup = async (req, res) => {
  const { email, password, city} = req.body;
  try {
    const user = await createUser(email, password, city);
    if(user) {
      res.status(201).json({ 
        message: 'User registered', 
        user: user.rows[0],
        redirectUrl: '/profile'
      });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
    console.log(err)
  }
}; 

// Log in a user
const signin = (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log(info)
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Login failed' });
  
    req.logIn(user, (err) => {
      if (!err) {
        res.status(200).json({ message: 'Logged in successfully', user, redirectUrl: '/profile' });
      } else {
        return next(err);
      }      
    });
  })(req, res, next);
};

// Log out a user
const signout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: 'Error logging out' });
    res.status(200).json({ message: 'Logged out successfully' });
  });
};

const profile = (req, res) => {
  
}

module.exports = { signup, signin, signout };
