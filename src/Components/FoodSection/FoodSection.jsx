import React from "react";
import image from "../images/whiite.png"
import { Link } from "react-router-dom";

import "./Style.css"
const FoodSection = () => {
  return (
    <>
  
   
    <div className="container-fluid py-5">
      <div className="row align-items-center bgcolore text-dark px-4 py-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="small text-white">Pet Supplies</p>
          <h2 className="fw-bold text-white">Shop Pet Food and Items Now !</h2>
         <Link to="/Petsuplince">  <button className=" bg-white bcolor btn text-white mt-3">BUY NOW</button> </Link>
        </div>
        <div className="col-md-6 text-center dogs-food pe-5">
          <img style={{ maxWidth:"360px",minWidth:"360px"}} src={image} alt="Pet Food" className="img-fluid" />
        </div>
      </div>
    
    </div>
    </>
  );
};

export default FoodSection;