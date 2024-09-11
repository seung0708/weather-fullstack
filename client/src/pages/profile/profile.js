import React, {useEffect, useState} from 'react'
import { getCurrentConditions } from '../../api/weather';
import { getUserById } from '../../api/users';

const Profile = ({user}) => {
  const [weather, setWeather] = useState(null);
  let signedInUser
  if(user) {
    signedInUser = user.user;
  }
  
  useEffect(() => {
    if(signedInUser && signedInUser.id) {
      const fetchData = async () => {
        try {
            const userData = await getUserById(signedInUser.id);
            const city = userData.city
            if (city) {
                const weatherData = await getCurrentConditions(city);
                setWeather(weatherData);
            } else {
                throw new Error('City not found for user');
            }
        } catch (error) {
            console.log(error)
        }
      };
      fetchData();
    }
  },[signedInUser])

  const {weather: weatherArray, main, wind} = weather; 

  return (
    <div id='profile' className='container'>
      <h2>Current conditions for Los Angeles, CA</h2>
      <div>
        <p>Temp: 75 Degres</p>
        <p>Sunny</p>
        <p>0% Chance of Rain</p>
      </div>
    </div>
  )
}

export default Profile