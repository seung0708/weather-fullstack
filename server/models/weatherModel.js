require('dotenv').config();
const pool = require('../database');
const {findByUserI} = require('./userModel');
const apikey = process.env.ACCWEATHER_KEY

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

const getDailyFive = async (locationKey) => {
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

const getCurrentconditions = async (locationKey) => {
    try {
        locationKey = await getWeather(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`)

        const data = await response.json();
        if(data) {
            return data 
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {getLocationKey, getWeather};
