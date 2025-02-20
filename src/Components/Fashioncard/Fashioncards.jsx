import React from "react";
import "./Style.css";
import one from "../images/fas3.png";
import two from "../images/two.png";
import three from "../images/fas5.png";
import four from "../images/fas6.png";
import five from "../images/five.png";

const Fashioncards = () => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* First Column */}
        <div className="col-12 col-sm-12 col-md-4">
          <div className="d-flex flex-column align-items-center">
            <img
              style={{ height: "200px", width: "100%" }}
              src={one}
              className="card-img-top img-hover my-2"
              alt="Office Products"
            />
            <img
              style={{ height: "200px", width: "100%" }}
              src={two}
              className="card-img-top img-hover my-2"
              alt="Office Products"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="col-12 col-sm-12 col-md-4">
          <div className="card overflow-hidden">
            <img
              style={{ height: "425px", width: "100%" }}
              src={three}
              className="card-img-top img-hover imagethree"
              alt="Baby Products"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="col-12 col-sm-12 col-md-4">
          <div className="d-flex flex-column align-items-center">
            <img
              style={{ height: "200px", width: "100%" }}
              src={four}
              className="card-img-top img-hover my-2"
              alt="Top Supplements"
            />
            <img
              style={{ height: "200px", width: "100%" }}
              src={five}
              className="card-img-top img-hover my-2"
              alt="Top Supplements"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashioncards;
