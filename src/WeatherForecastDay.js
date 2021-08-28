import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={33} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data[0].temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data[0].temp.min)}°
        </span>
      </div>
    </div>
  );
}
