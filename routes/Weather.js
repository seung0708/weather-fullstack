/*

When a user signs up, 
    I would have to call the getLocationKey, to get the weather information 
    once I get weather information from the inputted city, I save that information into the database to be viewed in the user's profile. 
    1. User A signs up
        1a. User A lives in Los Angeles, 
        1b. within the signup, I getWeather api to get the weather information for Los Angeles, 
        1c. save the user info and weather info into their respective tables. 
    2. Redirect to profile
        2a. Display the user's city's weather by pulling it up from the database. 

*/

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
