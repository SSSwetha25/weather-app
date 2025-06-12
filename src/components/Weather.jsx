import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search_icon.png'
import clear from '../assets/clear.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import cloudy from '../assets/cloudy.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'

const Weather = () => {
  const inputRef = useRef()
const [weatherData, setWeatherData]=useState(false);

const allIcons={
  "01d":clear,
  "01n":clear,
  "02d":cloudy,
  "02n":cloudy,
  "03d":cloudy,
  "03n":cloudy,
  "04d":drizzle,
  "04n":drizzle,
  "09n":rain,
  "10d":rain,
  "10n":rain,
  "13d":snow,
  "13n":snow,

}
  const search=async(city)=>{
    if(city===""){
      alert("Enter City Name");
      return;
    }
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response=await fetch(url);
      const data=await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon=allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
    }catch(error){
       setWeatherData(false)
       console.error("Error in fetchin weather data");
    }
  }

  useEffect(()=>{
    search("Chennai");
  },[])
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search'/>
            <img src={search_icon} width={30} alt="" onClick={()=>search(inputRef.current.value)}/> 
        </div>
        {weatherData?<>
        <img src={weatherData.icon} alt="clear sun" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity} alt="humid icon"/>
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind} alt=""/>
            <div>
              <p>{weatherData.windSpeed} Km/hr</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>

        </>:<></>}
        
    </div>
  )
}

export default Weather