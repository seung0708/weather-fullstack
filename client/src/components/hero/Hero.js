import React, {useEffect,useState} from 'react'
import { get5DayForecast} from '../../api/weather'
import './Hero.css'
 
const Hero = () => {
  const[weather, setWeather] = useState([])
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedCity, setSubmittedCity] = useState('Los Angeles');

  const handleChange = e => {
    setCity(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault(); 
    setSubmittedCity(city)
  }

  useEffect(() => {
    async function fetchData() {
      if(!submittedCity) return;

      setLoading(true);

      try {
        const data = await get5DayForecast(submittedCity);
        console.log(data)
        const dataArray = Object.entries(data).map(([date, data]) => ({date,...data}));
        setWeather(dataArray)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false); 
      }
      
    }
    fetchData();
  },[submittedCity])

    return (
      
      <section id='hero'>
        <div className="container">
          {(loading) ? <h2 style={{textAlign: 'center'}}>Loading weather data...</h2> : <></>}
          <form onSubmit={handleSubmit}>
            <input placeholder='Search' value={city} onChange={handleChange} />
            <button type='submit'>Submit</button>
          </form>
          <div className="row center-content">
            <div className="column">
              <div id="wrapper-bg" className="card">
                <div className="card-header">
                  <div className="text-center">
                    <p className="heading" id="wrapper-name">{submittedCity}</p>
                     <p id="wrapper-description">{weather[0]?.weather?.description}</p> 
                   <p className="temperature" id="wrapper-temp">{weather[0]?.main.temp}&deg;F</p>
                    <span>Pressure: <span id="wrapper-pressure">{weather[0]?.main.pressure}</span></span>
                    <span className="separator">|</span>
                    <span>Humidity: <span id="wrapper-humidity">{weather[0]?.main.humidity}</span></span>
                  </div>
                </div>
                {weather.map((item,i) => (
                <div key={i} className="card-body forecast-section">
                  <div className="row">
                    <div className="column-large">
                      <strong>{item.date}</strong>
                    </div>  
                    <div className="column-large text-right">
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