require('dotenv').config();
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController.js');

router.get('/5day', weatherController.get5DayForecastData);


module.exports = router;
