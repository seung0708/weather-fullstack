import React, {useEffect,useState} from 'react'
import { getWeather } from '../../api/weather'
import './Hero.css'
import weatherImg from './weatherapp.jpg'
const Hero = () => {
  const[weather, setWeather] = useState('')
  useEffect(() => {
    async function fetchData() {
      const weatherData = await getWeather();
      setWeather(weatherData)
    }
    //fetchData();
  },[])
  
  return (
    <section id='hero' className='hero container'>
      <div>
        <h1>Get Real Time Weather Forecasts</h1>
        <p>up to 5 days of any location</p>
      </div>
      <div>
        <img src={weatherImg} />
        {weather}
      </div>
    </section>
  )
}

export default Hero