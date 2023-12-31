import axios from 'axios';

const API_KEY = 'd8867dbe9f925f828afa02e412095929';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const DAYS = 4;

export const getWeatherByCity = (city) => {
  return axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  })
  .then((response) => response.data)
  .catch((error) => {
    console.error('Помилка під час отримання даних погоди:', error);
    throw error;
  });
};

export const getWeeklyWeather = async (lat, lon) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast/', {
      params: {
        lat: lat,
        lon: lon,
        cnt: DAYS,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    console.error('Помилка отримання погоди за тиждень', error);
  }
};

export const getWeeklyWeatherTest = async () => {
  try {
    const response = await axios.get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/703448?apikey=vy4U7or7BeCJFQ8NtdUYQJ8JImkd7W70&details=true&metric=true');

    const weatherData = response.data;
    console.log(weatherData);

    return weatherData;
  } catch (error) {
    console.error('Помилка отримання погоди за тиждень', error);
  }
};

// getWeeklyWeatherTest();



