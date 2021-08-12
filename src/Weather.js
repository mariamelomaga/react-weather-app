import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lisbon</h1>
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />{" "}
          30 ℃
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation:%</li>
            <li>wind:km/h</li>
            <li>humidity:%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
