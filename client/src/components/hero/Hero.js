import React, {useEffect,useState} from 'react'
import { get5DayForecast} from '../../api/weather'
import './Hero.css'
 
const Hero = () => {
  const[weather, setWeather] = useState([])
  const [city, setCity] = useState('Los Angeles')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await get5DayForecast(city);
        const dataArray = Object.entries(data).map(([date, data]) => ({date,...data}));
        setWeather(dataArray)
      } catch(error) {
        console.error(error)
      }
      
    }
    fetchData();
  },[city])

  if(weather.length === 0) {
    return <div>Loading weather data....</div>
  }

  return (
    <section>
      <div class="container">
        <div class="row center-content">
          <div class="column">
        {console.log(weather)}
        <div id="wrapper-bg" class="card" style={{backgroundImage: "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"}}>
          <div class="card-header">
            <div class="text-center">
              <p class="heading" id="wrapper-name">Los Angeles</p>
              <p id="wrapper-description">{weather[0].weather.description}</p>
              <p class="temperature" id="wrapper-temp">{weather[0].main.temp}&deg;F</p>
              <span>Pressure: <span id="wrapper-pressure">{weather[0].main.pressure}</span></span>
              <span class="separator">|</span>
              <span>Humidity: <span id="wrapper-humidity">{weather[0].main.humidity}</span></span>
            </div>
          </div>
          {weather.map(item => (
            <div class="card-body forecast-section">
              <div class="row">
                <div class="column-large">
                  <strong>{item.date}</strong>
                </div>  
                <div class="column-large text-right">
                  <span id="wrapper-forecast-temp-today">{item.main.temp}</span>
                </div>
            </div>
          </div>
          ))}
    
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero