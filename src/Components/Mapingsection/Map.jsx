import React from "react";

import { LocalShipping, Autorenew, ThumbUp, HeadsetMic } from "@mui/icons-material";

const Map = () => {
  return (
    <div className="container mt-5">
         <div className="text-center px-2  w-100 ms-4">
        <h4>Excellent</h4>
        <div className="text-warning">★★★★★ 4.5</div>
        <p style={{ opacity: 0.5 }} className="text-center">Based on <a className="text-decoration-none text-black" href="#">192 reviews</a></p>
      </div> 
      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-3 col-6">
          <LocalShipping className="bcolor" fontSize="large"/>
          <h5>Free Shipping</h5>
          <p>Free Shipping over the order of $99</p>
        </div>
        <div className="col-md-3 col-6">
          <Autorenew fontSize="large" className="bcolor" />
          <h5>Easy Return</h5>
          <p>Free return policy over $99 order</p>
        </div>
        <div className="col-md-3 col-6">
          <ThumbUp fontSize="large"className="bcolor"/>
          <h5>Quality Guaranteed</h5>
          <p>Quality checked by our team</p>
        </div>
        <div className="col-md-3 col-6">
          <HeadsetMic fontSize="large" className="bcolor" />
          <h5>Support 24/7</h5>
          <p>Talk with our experts for advice</p>
        </div>
      </div>

      {/* Map and Newsletter Section */}
      <div className="row mt-5 align-items-center">
        {/* Google Map */}
        <div className="col-md-6 my-2">
          <iframe
            title="map"
            
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3471.6679592786795!2d-95.71938612539022!3d29.526036142948296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1740085113348!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Newsletter Signup */}
        <div className="col-md-6 text-center">
          <h5>JOIN OUR NEWSLETTER NOW</h5>
          <p>Be the first to get latest updates, deals, and discounts</p>
          <div className="d-flex justify-content-center mb-5">
            <input
              type="email"
              placeholder="Your email address"
              className="form-control w-50"
            />
            <button className="btn-color rounded p-1 ms-2 ">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
