import React, {useEffect, useState} from 'react'
import './Profile.css'
import { getCurrentConditions } from '../../api/weather';
import { getUserById } from '../../api/users';

const Profile = ({user}) => {
  const [weatherData, setWeather] = useState(null);
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
  
  if(!weatherData) {
    return <div>Loading weather data....</div>
  }

  const {weather, main, name} = weatherData; 

  return (
   <section>
    <div class="container">
      <div class="row center-content">
        <div class="column">
          <div class="card">
            <div class="image-container">
              <img src="https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
                class="card-img" alt="weather" />
              <div class="mask"></div>
            </div>

            <div class="card-img-overlay">
              <h4 class="mb-0">{name}</h4>
              <p class="display-2 my-3">{main.temp}</p>
              <p class="mb-2">Feels Like: <strong>{main.feels_like}</strong></p>
              <h5>{weather[0].main}</h5>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Profile