import React from "react";
import Dakar from "../assets/img/Dakar.jpg";
import Diourbel from "../assets/img/Diourbel.jpg";
import Kaolack from "../assets/img/Kaolack.jpg";
import Kedougou from "../assets/img/Kedougou.jpg";
import Kolda from "../assets/img/Kolda.jpg";
import Matam from "../assets/img/Matam.jpg";
import Podor from "../assets/img/Podor.jpg";
import Tamba from "../assets/img/Tambacounda.webp";
import SL from "../assets/img/SL.jfif";
import Zig from "../assets/img/Zig.jfif";
import Cap from "../assets/img/Cap.jpg";
import Thies from "../assets/img/Thies.jpg";
import { CiLocationOn } from "react-icons/ci";
import { Stack } from "react-bootstrap";
import Temp from "./Temp";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function RegionImage({ region, weatherData, changeRegion }) {
  const [value, setValue] = React.useState("Dakar");
  const [inputValue, setInputValue] = React.useState("");

  const regions = {
    Thies: Thies,
    Dakar: Dakar,
    Diourbel: Diourbel,
    Kaolack: Kaolack,
    "Saint-Louis": SL,
    Tambacounda: Tamba,
    Podor: Podor,
    Matam: Matam,
    Kolda: Kolda,
    Kedougou: Kedougou,
    "Cap-Skirring": Cap,
    Ziguinchor: Zig,
  };

  const options = Object.keys(regions);

  const img = regions[region];

  return (
    <div className="img" style={{ backgroundImage: `url('${img}')` }}>
      <div style={{ float: "right" }} className="m-5">
        <div>
          <Autocomplete
            value={value}
            size="small"
            onChange={(event, newValue) => {
              setValue(newValue);
              changeRegion(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ backgroundColor: "white" }}
                label="Choose a region"
              />
            )}
          />
        </div>
      </div>

      <Temp weatherData={weatherData} />
      <div className="region">
        <CiLocationOn />
        {region}

        <div style={{ paddingLeft: 50, fontWeight: 900, fontSize: 20 }}>SN</div>
      </div>
    </div>
  );
}

export default RegionImage;
