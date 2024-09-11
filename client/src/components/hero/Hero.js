import React, {useEffect,useState} from 'react'
import { get5DayForecast} from '../../api/weather'
import './Hero.css'
 
const Hero = () => {
  const[weather, setWeather] = useState([])
  const [city, setCity] = useState('Los Angeles')

  useEffect(() => {
    async function fetchData() {
      console.log('fetchdata is being called')
      try {
        const data = await get5DayForecast(city);
        const dataArray = Object.entries(data).map(([date, data]) => ({date,...data}));
        setWeather(dataArray)
      } catch(error) {
        console.error(error)
      }
      
    }
    //fetchData();
  },[city])
  
  return (
    <section id='hero' className='hero container'>
      <div>
        <h1>Get Real Time Weather Forecasts</h1>
        <p>up to 5 days of any location</p>
      </div>
      <div>
        {weather.map(item => (
          <div>
            {console.log(item)}
            <h2>{item.date}</h2>
            <p>{item.main.temp}</p>
            <p>{item.weather.main}</p>
            <p></p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero