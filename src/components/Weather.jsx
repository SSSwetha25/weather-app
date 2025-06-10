import React from 'react'
import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search} width={30} alt=""/>
        </div>
        <img src={clear} alt="clear sun" className='weather-icon'/>
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
        <div className="weather-data">
          <div className="col"></div>
        </div>
    </div>
  )
}

export default Weather