const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const {findUserByEmail, findUserById} = require('./models/userModel');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    try {
      const user = await findUserByEmail(email);
      
      if (!user) return done(null, false, { message: 'No user with that email' });

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) return done(null, user);
      else return done(null, false, { message: 'Password incorrect' });
    } catch (err) {
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await findUserById(id);
    done(null, user);
  });
}

module.exports = initialize;
