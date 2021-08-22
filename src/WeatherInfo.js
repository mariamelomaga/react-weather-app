import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units"> ° C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>wind:{props.data.wind}km/h</li>
            <li>humidity:{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
