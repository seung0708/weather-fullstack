import React, {useEffect,useState} from 'react'
import { get5DayForecast } from '../../api/weather'
import './Hero.css'
import weatherImg from './weatherapp.jpg'
const Hero = () => {
  const[weather, setWeather] = useState([])
  const [city, setCity] = useState('Los Angeles, CA')

  useEffect(() => {
    async function fetchData() {
      console.log('fetchdata is being called')
      try {
        const data = await get5DayForecast(city);
        console.log(data)
        setWeather(data)
      } catch(error) {
        console.error(error)
      }
      
    }
    fetchData();
  },[city])
  
  return (
    <section id='hero' className='hero container'>
      <div>
        {}
        <h1>Get Real Time Weather Forecasts</h1>
        <p>up to 5 days of any location</p>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Hero