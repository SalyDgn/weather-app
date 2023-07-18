import "./App.css";
import Container from "react-bootstrap/Container";
import Forecast from "./Components/Forecast";
import RegionImage from "./Components/RegionImage";

function App() {
  const { MongoClient } = require("mongodb");

  return (
    <Container className="App my-5 text-light">
      <RegionImage region="Thies"></RegionImage>
      <Forecast></Forecast>
    </Container>
  );
}

export default App;
