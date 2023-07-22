import "./App.css";
import Forecast from "./Components/Forecast";
import RegionImage from "./Components/RegionImage";

import { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./Components/DataCard";
import { Stack } from "react-bootstrap";
import Data from "./Components/Data";
import LineChart from "./Components/LineChart";
import GeographyChart from "./Components/GeographyChart";

function App() {
  const [region, setRegion] = useState("Thies");
  const [weatherData, setWeatherData] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Effectuer la requête GET
    axios
      .get(`http://localhost:4000/weather/${region}`)
      .then((response) => {
        // Mettre à jour l'état avec les données récupérées
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données climatiques",
          error
        );
      });
  }, [region]);

  useEffect(() => {
    // Effectuer la requête GET
    axios
      .get(`http://localhost:4000/predictions/${region}`)
      .then((response) => {
        // Mettre à jour l'état avec les données récupérées
        setPredictions(response.data.slice(-3));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données prediction",
          error
        );
      });
  }, [region]);
  console.log(predictions);
  const pred = ["11", "12", "13"];
  return (
    <div className="App my-3 mx-5 text-light">
      <RegionImage
        changeRegion={(value) => setRegion(value)}
        region={region}
        weatherData={weatherData}
      ></RegionImage>
      <div className="row md-5" direction="horizontal">
        <div className="col-2 mt-3 mr-5">
          <Data weatherData={weatherData} />
          <div className="mt-3" style={{ fontSize: "20px" }}>
            3 Hours Forecast
          </div>
          {predictions.map((prediction) => (
            <Forecast key={prediction.id} prediction={prediction} />
          ))}
        </div>
        <DataCard
          className="col ml-5 pr-5"
          weatherData={weatherData}
        ></DataCard>
      </div>
      <br />
      <div className="row">
        <div className="col" style={{ width: "500px", height: "500px" }}>
          <LineChart weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
