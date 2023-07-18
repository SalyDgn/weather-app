import React from "react";
import Image from "react-bootstrap/Image";
import Thies from "../assets/img/Thies.jpg";
import { useState } from "react";

function RegionImage({ region }) {
  const regions = {
    Thies: Thies,
  };

  //const [image, setImage] = useState();

  const img = regions[region];

  return <div className="img"></div>;
}

export default RegionImage;
