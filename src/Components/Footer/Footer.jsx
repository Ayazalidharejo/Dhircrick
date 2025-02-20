




import React from "react";
import { Link } from "react-router-dom";
import img from "../images/ft.png";
import "./Style.css";

const Footer = () => {
  return (
    <footer className="backgroundcolor text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
          <h5 className="mb-3 d-none d-md-block">WORLDWISETRADINGLL</h5>

            <p>Phone Number: +1 (832) 875-2999</p>
            <p>Warehouse Address: HAMIDA AASLAM MEGHANT SOLE MBR 9535 MCDOWELL DR RICHMOND,TX 77469</p>
            <p>worldwisetradingllc.info@gmail.com</p>
          </div>
          <div className="col-md-3  text-center d-none d-md-block">
  <h5 className="mb-3">Quick Links</h5>
  <ul className="list-unstyled">
    <li><Link to="/" className="text-white text-decoration-none my-3">Home</Link></li>
    <li><Link to="/Shop" className="text-white text-decoration-none my-3">Shop</Link></li>
    <li><Link to="/Checkout" className="text-white text-decoration-none my-3">Checkout</Link></li>
    <li><Link to="/ContactForm" className="text-white fw-bold text-decoration-none my-3">Contact us</Link></li>
  </ul>
</div>

         
          <div className="col-md-3 sm-12">
            <h5 className="mb-3">Policy Page </h5>
            <ul className="list-unstyled">
              <li><Link to="/AboutUs" className="text-white text-decoration-none my-3">About Us</Link></li>
              <li><Link to="/Turms" className="text-white text-decoration-none my-3">Terms of Service</Link></li>
              <li><Link to="/Toyandgames" className="text-white text-decoration-none my-3">Shipping Policy</Link></li>
              <li><Link to="/Privacy" className="text-white text-decoration-none my-3">Privacy</Link></li>
            </ul>
          </div>
          <div className="col-md-3 sm-12">
            <h5 className="mb-3">Top Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/Petsuplince" className="text-white text-decoration-none my-3">Pet suplince</Link></li>
              <li><Link to="/Beautyproduct" className="text-white text-decoration-none my-3">Beauty product</Link></li>
              <li><Link to="/HomeKitchen" className="text-white text-decoration-none my-3">Home and kichen</Link></li>
              <li><Link to="/Toyandgames" className="text-white text-decoration-none my-3">Toy and Games</Link></li>
           
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; WORLDWISETRADINGLL 2025 All Rights Reserved.</p>
          <div className="d-none d-md-block">
  <img src={img} alt="Visa" width="240" className="me-2" />
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;