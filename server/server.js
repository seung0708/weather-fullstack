// Import the Express library
const express = require('express');

// Load environment variables from .env file
require('dotenv').config();

// Import middleware for handling request bodies
const bodyParser = require('body-parser');

// Import session management
const session = require('express-session');
const store = new session.MemoryStore(); //in memory store

// Import authentication middleware and configurations
const passport = require('passport');
const pool = require('./database');
const initializePassport = require('./passport-config');
const cors = require('cors');

// Import route handlers
const userRoutes = require('./routes/users');
const weatherRoutes = require('./routes/weather');
const authRoutes = require('./routes/auth');

// Set up the server port
const PORT = process.env.PORT || 5000;

// Initialize Express application
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Configure session management
app.use(session({
  store,
  secret: 'your_secret', // Secret for signing session ID cookie
  resave: false, // Do not save session if unmodified
  saveUninitialized: false, // Do not save uninitialized sessions
  cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 } // Cookie settings
}));

// Initialize and use Passport for authentication
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.use('/users', userRoutes);
app.use('/weather', weatherRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
