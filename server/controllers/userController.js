const {findUserById} = require('../models/userModel');
const {getCurrentWeather} = require('../controllers/weatherController');

const showUserProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await findUserById(userId);
    if(user) {
      const weatherData = await getCurrentWeather(user.city);
      res.json({user, weather: weatherData});
    } else {
      res.status(404).json({error: 'User not found'});
    }
  } catch(error) {
    res.status(500).json({error: 'Server error'});
  }
}


module.exports = { showUserProfile };
