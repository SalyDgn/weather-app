import React from "react";
import Horloge from "./Horloge";
import { BsSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { Spinner } from "react-bootstrap";

function Data({ weatherData }) {
  return (
    <div className="data p-2">
      <Horloge />
      {weatherData[weatherData.length - 1] === undefined ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <BsSunriseFill style={{ color: "yellow", fontSize: "20px" }} />{" "}
            Sunrise :{" "}
            {weatherData[weatherData.length - 1].sunrise
              .split(" ")[1]
              .slice(0, 5)}
          </div>
          <div>
            <BsSunsetFill style={{ color: "yellow", fontSize: "20px" }} />{" "}
            Sunset :{" "}
            {weatherData[weatherData.length - 1].sunset
              .split(" ")[1]
              .slice(0, 5)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
