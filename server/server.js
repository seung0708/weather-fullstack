require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('passport');
const PgSession = require('connect-pg-simple')(session);
const pool = require('./database');
const cors = require('cors');
const userRoutes = require('./routes/users');
const initializePassport = require('./passport-config');

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(bodyParser.json()); // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded body
app.use(express.json());
app.use(cors({
  credentials: true
}));

// Session configuration
app.use(session({
  store: new PgSession({
    pool: pool,
    tableName: 'session'
  }),
  secret: 'your_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}));

// Passport
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working')
})

// Start the server
app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
