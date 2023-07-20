import React from "react";
import { Spinner } from "react-bootstrap";

function Temp({ weatherData }) {
  <div class="weather-icon">
    <img src="icons/unknown.png" />
  </div>;
  return weatherData[weatherData.length - 1] === undefined ? (
    <div className="data-temp pt-5">
      <Spinner className="mt-3" />
    </div>
  ) : (
    <div className="data-temp d-flex flex-column justify-content-around py-4">
      <div className="icone">
        <div className="weather-icon d-flex flex-column">
          <img
            className="icon"
            src={require(`../icons/${
              weatherData[weatherData.length - 1].icon
            }.png`)}
          />
          <div className="px-1 pb-2">
            {weatherData[weatherData.length - 1].main}
          </div>
        </div>
      </div>
      <div className="tempt">
        {Math.floor(weatherData[weatherData.length - 1].temp)} °C
      </div>
    </div>
  );
}

export default Temp;
