import { getWeeklyWeather } from 'API/WeatherAPI';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import style from 'components/WeatherForecasts/WeatherForecasts.module.css';

const WeatherForecasts = ({lat, lon}) => {
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeeklyWeather(lat, lon);
        setWeeklyWeather(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.error('Error getting weather!', error);
      }
    };

    fetchData();
  }, [lat, lon]);
  
  console.log(weeklyWeather);
  
  return (
    <div>
      <h2>Today</h2>
      <p>{format( new Date(), 'dd MMMM')}</p>
      <ul className={style.forecast_list}>
      {weeklyWeather !== null ? (
        weeklyWeather.list.map((item) => {
          return (
            <li key={item.dt}>
              <p>{Math.round(item.main.temp)}°C</p>
              <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
            </li>
          );
        })
      ) : (
        <li>Loading...</li>
      )}
      </ul>
    </div>
  )
}

export default WeatherForecasts;