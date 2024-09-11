require('dotenv').config();
const pool = require('../database');
const {findByUserI} = require('../models/userModel');
const apikey = process.env.ACCWEATHER_KEY
const baseUrl = 'http://api.openweathermap.org'

const getDailyFive = async (req, res) => { 
    const {city} = req.query; 
    try {
        const fiveDayForecast = await get5DayForecastData(city);
        res.json(fiveDayForecast);
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

const getGeoLocations = async(city) => {
    //city = 'Los Angeles'
    try {
        const response = await fetch(`${baseUrl}/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`);
        const data = await response.json();
        
        return [data[0].lat, data[0].lon]
    } catch (error) {
        console.error('Error fetching 5-day forecast data:', error);
        throw error;
    }
}


const get5DayForecastData = async (city) => {
    try {
        const latLon = await getGeoLocations(city);
        const response = await fetch (`${baseUrl}/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=${apikey}&units=imperial`);
        const data = await response.json();
        const groupedData = data.list.reduce((acc, item) => {
            const date = item.dt_txt.split(' ')[0];
            if(!acc[date]) {
                acc[date] = { 
                    main: item.main,
                    weather: item.weather[0],
                    clouds: item.clouds,
                    wind: item.wind
                }
            }
            return acc
        },{})

        if(groupedData) {
            return groupedData;
        }      
    } catch(error) {
        console.log(error);
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
