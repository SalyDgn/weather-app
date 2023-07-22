import React from "react";
import { Spinner } from "react-bootstrap";

function Forecast({ prediction }) {
  return (
    <>
      {prediction === undefined ? (
        <Spinner />
      ) : (
        <div className="d-flex predict-card justify-content-between mt-3">
          <div className="predict-time">
            {prediction.timestamp.split(" ")[1].slice(0, 5)}
          </div>
          <div className="predict-temp">{prediction.temperature}°C</div>
        </div>
      )}
    </>
  );
}

export default Forecast;
