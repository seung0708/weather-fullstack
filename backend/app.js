require('dotenv').config();
const express = require('express');
const cors = require("cors");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}

const PORT = process.env.PORT;

const weatherRoutes = require('./routes/Weather');
const userRoutes = require('./routes/users')

const app = express(); 
app.use(express.json());
app.use(cors(corsOptions));
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working')
})

app.listen(PORT, () => {
    console.log(`${PORT} is listening`)
})


module.exports = app;