const weatherModel = require('../controllers/weatherController');

const get5DayForecastData = async (req, res) => {
    const {city} = req.query; 
    try {
        const locationKey = await weatherModel.getLocationKey(city);
        const fiveDayForecast = await weatherModel.getDailyFive(locationKey);
        res.json(fiveDayForecast)
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}





module.exports = {get5DayForecastData}