const express = require('express');
const router = express.Router();
const {getDailyFive, getCurrentWeather} = require('../controllers/weatherController.js');

router.get('/5day', getDailyFive);
router.get('/', getCurrentWeather);

module.exports = router;
