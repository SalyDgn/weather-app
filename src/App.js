import "./App.css";
import Forecast from "./Components/Forecast";
import RegionImage from "./Components/RegionImage";

import { useState, useEffect } from "react";
import axios from "axios";
import HighLight from "./Components/HighLight";

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
        console.log(response.data);
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
        setPredictions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données prediction",
          error
        );
      });
  }, [region]);

  return (
    <div className="App my-3 mx-5 text-light">
      <RegionImage
        changeRegion={(value) => setRegion(value)}
        region={region}
        weatherData={weatherData}
      ></RegionImage>
      <Forecast></Forecast>
      <HighLight weatherData={weatherData}></HighLight>
    </div>
  );
}

export default App;
