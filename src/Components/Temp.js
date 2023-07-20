import React from "react";
import { IconBase } from "react-icons";
import { Spinner } from "react-bootstrap";

function Temp({ weatherData }) {
  return weatherData[weatherData.length - 1] === undefined ? (
    <div className="data-temp pt-5">
      <Spinner className="mt-3" />
    </div>
  ) : (
    <div className="data-temp d-flex flex-column justify-content-around py-4">
      <div className="icone">
        Placeholder
        <br />
        {weatherData[weatherData.length - 1].main}
      </div>
      <div className="temp">
        {Math.floor(weatherData[weatherData.length - 1].temp)} °C
      </div>
    </div>
  );
}

export default Temp;
