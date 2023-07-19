import React from "react";
import Image from "react-bootstrap/Image";
import Thies from "../assets/img/Thies.jpg";
import Dakar from "../assets/img/Dakar.jpg";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { CiLocationOn } from "react-icons/ci";
import { Stack } from "react-bootstrap";
import Temp from "./Temp";

function RegionImage({ region, weatherData }) {
  const regions = {
    Thies: Thies,
    Dakar: Dakar,
  };

  const img = regions[region];

  return (
    <div className="img" style={{ backgroundImage: `url('${img}')` }}>
      <div style={{ float: "right" }} className="m-5">
        <SearchBar />
      </div>
      <Stack direction="vertical">
        <Temp weatherData={weatherData} />
        <div className="region">
          <CiLocationOn />
          {region}
          <br />
          <small>SN</small>
        </div>
      </Stack>
    </div>
  );
}

export default RegionImage;
