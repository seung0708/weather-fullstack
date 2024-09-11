require('dotenv').config();
const pool = require('../database');
const {findByUserI} = require('./userModel');
const apikey = process.env.ACCWEATHER_KEY

const getDailyFive = async (req, res) => {
    const {city} = req.query; 
    try {
        const locationKey = await getLocationKey(city);
        const fiveDayForecast = await getDailyFive(locationKey);
        res.json(fiveDayForecast)
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const getCurrentWeather = async(req, res) => {
    const {city} = req.query;
    try {
        const locationKey = await getLocationKey(city);
        const currentConditions = await getCurrentConditionsData(locationKey);
        res.json(fiveDayForecast);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}



const get5DayForecastData = async (locationKey) => {
    try {
        const response = await fetch (`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}`);
        
        const data = await response.json();
        if(data) {
            return data;
        }        
    } catch(error) {
        console.log(error);
    }
}

const getLocationKey = async (city) => {
    try {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${city}`)
        const locationKey = await response.json();
        if(locationKey && locationKey.length > 0) {
            return locationKey[0].Key
        }
    } catch (error) {
        console.log(error)
    }
}


const getCurrentConditionsData = async (locationKey) => {
    try {
         const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`)

        const data = await response.json();
        if(data) {
            return data 
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {getDailyFive, getCurrentWeather};
