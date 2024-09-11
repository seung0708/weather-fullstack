require('dotenv').config();
const express = require('express');
const router = express.Router();
const {getDailyFive} = require('../controllers/weatherController.js');

router.get('/5day', getDailyFive);


module.exports = router;
