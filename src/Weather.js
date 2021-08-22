import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>

        <ul>
          <li>Wednesday 20:00</li>
          <li>sunny</li>
        </ul>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="type a city"
              autoFocus="on"
              className="form-search"
            />
          </div>
          <div className="col-9">
            <input type="submit" value="search" className="btn" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />{" "}
            {Math.round(weatherData.temperature)}
          </div>
          <div className="col-6">
            <ul>
              <li>wind:{weatherData.wind}km/h</li>
              <li>humidity:{weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5a12dd671f298e4a72d4ec34c2cdc4ee";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
