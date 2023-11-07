import React from 'react'

const Header = ({weather}) => {
  if (!weather) {
    return <div>Loading...</div>;
  }

  // console.log(weather);

  return (
    <div>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
      <h1>{weather.name}</h1>
      <p>{Math.floor(weather.main.temp)}°C</p>
      <p>{weather.weather[0].main}</p>
      <div className='current-temp'>
        <p>Max: {Math.round(weather.main.temp_max)}°C</p>
        <p>Min: {Math.round(weather.main.temp_min)}°C</p>
      </div>
    </div>
  )
}

export default Header;