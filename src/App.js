import "./App.css";
import Container from "react-bootstrap/Container";
import Forecast from "./Components/Forecast";
import RegionImage from "./Components/RegionImage";

function App() {
  return (
    <div className="App my-5 mx-5 text-light">
      <RegionImage region="Thies"></RegionImage>
      <Forecast></Forecast>
    </div>
  );
}

export default App;
