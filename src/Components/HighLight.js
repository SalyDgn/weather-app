import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardStack.css"; // Fichier CSS personnalisé pour définir la couleur des cartes
import { BsThermometerHalf } from "react-icons/bs";
import { Spinner } from "react-bootstrap";
import { FiDroplet } from "react-icons/fi";
import { PiWind } from "react-icons/pi";
import { BsEye } from "react-icons/bs";

const HighLight = ({ weatherData }) => {
  return (
    <div className="container color-light">
      <p className="card-text ">HighLight</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
              <p className="card-title">Feels Like</p>
              <div className="row card-text">
                {" "}
                {weatherData[weatherData.length - 1] === undefined ? (
                  <Spinner />
                ) : (
                  <>
                    <p className="col-md-3">
                      {weatherData[weatherData.length - 1].feels_like}{" "}
                      <span>°C</span>
                    </p>
                    <BsThermometerHalf />
                    <p className="temp"> The temperature you actually feel</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
              <p className="card-title">Humidity</p>
              <div className="row card-text">
                {" "}
                {weatherData[weatherData.length - 1] === undefined ? (
                  <Spinner />
                ) : (
                  <>
                    <p className="col-md-3">
                      {weatherData[weatherData.length - 1].humidity} %
                    </p>{" "}
                    <FiDroplet />
                    <p className="temp">
                      {" "}
                      The dew point is{" "}
                      {weatherData[weatherData.length - 1].dew_point}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
              <p className="card-title">Wind Speed</p>
              <div className="row card-text">
                {weatherData[weatherData.length - 1] === undefined ? (
                  <Spinner />
                ) : (
                  <>
                    <p className="col-md-3">
                      {weatherData[weatherData.length - 1].wind_speed} m/s
                    </p>{" "}
                    <PiWind />
                    <p className="temp">Air movement velocity.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card rounded-200 custom-card-color">
            <div className="card-body">
              <p className="card-title">Visibility</p>
              <div className="row card-text">
                {weatherData[weatherData.length - 1] === undefined ? (
                  <Spinner />
                ) : (
                  <>
                    <p className="col-md-3">
                      {weatherData[weatherData.length - 1].visibility} m/s
                    </p>{" "}
                    <BsEye />
                    <p className="temp">The distance you can see clearly </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
