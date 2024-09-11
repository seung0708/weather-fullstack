const {findUserById} = require('../models/userModel');
const {getCurrentWeather} = require('../controllers/weatherController');

const showUserProfile = async (req, res) => {
  const userId = req.params.id
  const user = await findUserById(userId);
  if(!user || user.rows.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }
  const weatherData = await getCurrentWeather(user.rows[0].city);
    console.log('showUser', weatherData)
  try {
    const user = await findUserById(userId);

    if(!user || user.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const weatherData = await getCurrentWeather(user.rows[0].city);
    console.log(weatherData)
    res.json({user, weather: weatherData});
  } catch(error) {
    res.status(500).json({error: error.message});
  }
}
 

module.exports = { showUserProfile };
