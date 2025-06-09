import React from 'react'
import './Weather.css'
import search from '../assets/search.png'
const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search} width={30} alt=""/>
        </div>
        
    </div>
  )
}

export default Weather