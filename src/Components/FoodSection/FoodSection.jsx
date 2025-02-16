import React from "react";
import image from "../images/than.png"
import { Link } from "react-router-dom";


const FoodSection = () => {
  return (
    <>
    {/* <h3 className="text-center mt-5">DISCOUNTED PRODUCTS</h3> */}
   
    <div className="container-fluid py-5">
      <div className="row align-items-center bg-warning text-dark px-4 py-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="small">Pet Supplies</p>
          <h2 className="fw-bold">Shop Pet Food and Items Now !</h2>
         <Link to="/Suplincemaine">  <button className="btn btn-primary mt-3">BUY NOW</button> </Link>
        </div>
        <div className="col-md-6 text-center">
          <img src={image} alt="Pet Food" className="img-fluid" />
        </div>
      </div>
      {/* <h3 className="text-center mt-5">DISCOUNTED PRODUCTS</h3> */}
    </div>
    </>
  );
};

export default FoodSection;