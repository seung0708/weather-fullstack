import React from 'react'
import './Hero.css'
import weatherImg from './weatherapp.jpg'
const Hero = () => {
  return (
    <section id='hero' className='hero container'>
      <div>
        <h1>Get Real Time Weather Forecasts</h1>
        <p>up to 5 days of any location</p>
      </div>
      <div>
        <img src={weatherImg} />
      </div>
    </section>
  )
}

export default Hero