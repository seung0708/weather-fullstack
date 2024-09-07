const express = require('express');
const cors = require("cors");
const routes = require('./server/routes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 5000;

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