import React from 'react'

const Header = ({weather}) => {
  if (!weather) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>City: {weather.name}</h1>
      <div className='current-temp'>
        <p>Max: {Math.round(weather.main.temp_max)}°C</p>
        <p>Min: {Math.round(weather.main.temp_min)}°C</p>
      </div>
    </div>
  )
}

export default Header;