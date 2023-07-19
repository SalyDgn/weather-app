import "./App.css";
import Forecast from "./Components/Forecast";
import RegionImage from "./Components/RegionImage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [region, setRegion] = useState("Dakar");
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Effectuer la requête GET
    axios
      .get("http://localhost:4000/weather")
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
  }, []);

  return (
    <div className="App my-5 mx-5 text-light">
      <RegionImage region={region} weatherData={weatherData}></RegionImage>
      <Forecast></Forecast>
    </div>
  );
}

export default App;
