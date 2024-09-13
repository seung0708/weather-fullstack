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
    <div className="container">
      <div className="row center-content">
        <div className="column">
          <div className="card">
            <div className="image-container">
              <img src="https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
                className="card-img" alt="weather" />
              <div className="mask"></div>
            </div>

            <div className="card-img-overlay">
              <h4 className="mb-0">{name}</h4>
              <p className="display-2 my-3">{main.temp}</p>
              <p className="mb-2">Feels Like: <strong>{main.feels_like}</strong></p>
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