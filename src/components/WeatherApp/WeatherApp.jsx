import Header from 'components/Header/Header';
import React, { useState, useEffect } from 'react'
import { getWeatherByCity } from 'API/WeatherAPI';
import WeatherForecasts from 'components/WeatherForecasts/WeatherForecasts';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Kyiv');

  useEffect(() => {
    getWeatherByCity(city)
      .then((data) => {
        if (data) {
          setWeatherData(data);
        }
      });
  }, []);

  //console.log(weatherData);

  return (
    <div>
      <Header weather={weatherData}/>
      {weatherData && weatherData.coord && (
        <WeatherForecasts
          lat={weatherData.coord.lat}
          lon={weatherData.coord.lon}
        />
      )}
    </div>
  )
}

export default WeatherApp;