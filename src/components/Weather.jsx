import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search_icon.png'
import clear from '../assets/clear.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
const Weather = () => {

  const search=async(city)=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
    }catch(error){

    }
  }

  useEffect(()=>{
    search("London");
  },[])
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon} width={30} alt=""/> 
        </div>
        <img src={clear} alt="clear sun" className='weather-icon'/>
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity} alt="humid icon"/>
            <div>
              <p>91 %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind} alt=""/>
            <div>
              <p>3.6 Km/hr</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather