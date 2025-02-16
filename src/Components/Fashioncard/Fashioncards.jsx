import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"; // Custom CSS file
import Cream from "../images/saven.jpg";
import Cream2 from "../images/saven.jpg";
import Cream3 from "../images/saven.jpg";
import Cream4 from "../images/saven.jpg";
import { Box } from "@mui/material";

const categories = [
  {
 
    image: Cream,
  },
  {
   
    image: Cream2,
  },
  {
 
    image: Cream3,
  },
  {
   
    image: Cream4,
  },

];

const Fashioncards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-6 col-sm-6 col-md-3 mb-4" key={index}>
            <div className="product-card">
      <img src={category.image} alt="Baby Products" className="product-image" />
      <div className="overlay">
     
      </div>
    </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Fashioncards;
