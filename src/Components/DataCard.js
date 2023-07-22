import React from "react";
import { BsThermometerHalf } from "react-icons/bs";
import { Spinner } from "react-bootstrap";
import { FiDroplet } from "react-icons/fi";
import { PiWind } from "react-icons/pi";
import { BsEye } from "react-icons/bs";

function DataCard({ weatherData }) {
  return (
    <>
      <div className="col-4">
        <div className="data-card my-3">
          <p className="">Feels Like</p>
          <div className="">
            {" "}
            {weatherData[weatherData.length - 1] === undefined ? (
              <Spinner />
            ) : (
              <>
                <p className="numbers">
                  {weatherData[weatherData.length - 1].feels_like}{" "}
                  <span>°C</span>
                </p>
                <p className="temp">
                  <BsThermometerHalf /> The temperature you actually feel
                </p>
              </>
            )}
          </div>
        </div>
        <div className="data-card">
          <p className="">Humidity</p>
          <div className="">
            {" "}
            {weatherData[weatherData.length - 1] === undefined ? (
              <Spinner />
            ) : (
              <div>
                <p className="numbers">
                  {weatherData[weatherData.length - 1].humidity} %
                </p>{" "}
                <p className="">
                  {" "}
                  <FiDroplet />
                  The dew point is{" "}
                  {weatherData[weatherData.length - 1].dew_point} right now.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="data-card my-3">
          <p className="">Wind Speed</p>
          <div className="">
            {weatherData[weatherData.length - 1] === undefined ? (
              <Spinner />
            ) : (
              <div className="">
                <p className="numbers">
                  {weatherData[weatherData.length - 1].wind_speed} m/s
                </p>{" "}
                <p className="">
                  <PiWind />
                  Air movement velocity.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="data-card">
          <p className="">Visibility</p>
          <div className="">
            {weatherData[weatherData.length - 1] === undefined ? (
              <Spinner />
            ) : (
              <div className="">
                <p className="numbers">
                  {weatherData[weatherData.length - 1].visibility} m/s
                </p>{" "}
                <p className="">
                  <BsEye /> The distance you can see clearly.{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DataCard;
