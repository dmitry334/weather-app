import { getWeeklyWeather } from 'API/WeatherAPI';
import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';

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
      <h2>7-Days Forecasts</h2>
      <ul>
      {weeklyWeather !== null ? (
        weeklyWeather.list.map((item) => {
          const parsedDate = parse(item.dt_txt, 'yyyy-MM-dd HH:mm:ss', new Date());
          const dayOfWeek = format(parsedDate, 'EEEE');
          return (
            <li key={item.dt}>
              <p>{item.main.temp}°C</p>
              <p>{dayOfWeek}</p>
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