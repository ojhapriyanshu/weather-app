import React, { useEffect, useState, useRef } from 'react';

import './Weather.css';
import searchIcon from '../assets/search.png';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import drizzleIcon from '../assets/drizzle.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import refreshIcon from '../assets/refresh.png';

const Weather = () => {
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const updateRecentSearches = (city) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== city.toLowerCase());
      const updated = [city, ...filtered];
      return updated.slice(0, 6);
    });
  };

  const search = async (city) => {
    if (city === '') {
      alert('Please enter a city name');
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      const iconname = data.weather[0].icon || '01d';
      const i = `https://openweathermap.org/img/wn/${iconname}@2x.png`;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: i,
      });

      updateRecentSearches(data.name);
    } catch (error) {
      setWeatherData(false);
    }
  };

  useEffect(() => {
    search('Mumbai');
  }, []);

  return (
    <div className="Weather">

      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="absolute top-4 right-4 px-4 py-2 rounded-lg text-white bg-gray-800 dark:bg-gray-300 dark:text-black shadow-md transition text-3xl"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search for a city" />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => {
            search(inputRef.current.value);
          }}
        />
        <img
          src={refreshIcon}
          alt="Refresh"
          onClick={() => {
            search(inputRef.current.value);
          }}
          title="Refresh"
        />
      </div>

      {/* Dropdown for recent searches */}
      {recentSearches.length > 0 && (
        <ul className="recent-searches">
          {recentSearches.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                inputRef.current.value = city;
                search(city);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}

      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="Weather_icon" />
          <p className="temprature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-details">
            <div className="col">
              <img src={humidityIcon} alt="" />
              <div>
                <p>{weatherData.humidity}</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={windIcon} alt="" />
              <div>
                <p>{weatherData.windSpeed}</p>
                <span>WindSpeed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
};

export default Weather;
