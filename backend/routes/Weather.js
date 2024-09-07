require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', () => {
    console.log('hello')
})


router.get('/get-weather/:city', async (req, res) => {
    try {
        const locationKey = await getLocationKey('Los Angeles, CA');
        console.log(locationKey)
        const weatherRespnose = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`)

        res.json(weatherRespnose.data);
    } catch(error) {
        res.status(500).json({message: 'Error fetching weather data'});
    }
})


const getLocationKey = async (city) => {
    try {
        const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search', {
            params: {
                apikey: process.env.ACCWEATHER_KEY,
                q: city
            }
        })
        const locationKey = response;
        return locationKey
    } catch (error) {
        console.log(error)
    }
}


module.exports = router;
