
import React from "react";
import { Link } from "react-router-dom";
import img from "../images/ft.png";
import "./Style.css";

const Footer = () => {
  return (
    <footer className="backgroundcolor text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <h5 className="mb-3">WORLDWISE TRADING,LLC</h5>
            <p>Phone: +1 (832) 875-2999</p>
            <p>Warehouse Address: Hamida Asslam Meghant sole MBR 9535 Mcdowell dr Richmond,tx 77469</p>
           
            <p>Email:<a href="mailto:info@worldwisetradingllc.com" className="text-white text-decoration-none">info@worldwisetradingllc.com</a></p>

          </div>
          
          <div className="col-6 col-md-3 col-lg-2 mb-4 fotr text-center ">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
            
              <li><Link to="/ContactForm" className="text-white fw-bold text-decoration-none">Contact Us</Link></li>
              <li><Link to="/Checkout" className="text-white text-decoration-none">Checkout</Link></li>
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/Shop" className="text-white text-decoration-none">Shop</Link></li>
            
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4 text-center">
            <h5 className="mb-3">Policy Pages</h5>
            <ul className="list-unstyled">
             
              <li><Link to="/Turms" className="text-white text-decoration-none">Terms of Service</Link></li>
              <li><Link to="/Checkout" className="text-white text-decoration-none">Shipping Policy</Link></li>
              <li><Link to="/Privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/AboutUs" className="text-white text-decoration-none">About Us</Link></li>
            </ul>
          </div>
          
          <div className="col-6 col-md-3 col-lg-2 mb-4 text-center">
            <h5 className="mb-3 ">Info Links</h5>
            <ul className="list-unstyled">
             
              <li><Link to="/ReturnPolicy" className="text-white text-decoration-none">Return Policy</Link></li>
              <li><Link to="/Signup" className="text-white text-decoration-none">Login/Logout</Link></li>
              <li><Link to="/Deshboard" className="text-white text-decoration-none">Dashboard</Link></li>
              <li><Link to="/Compare" className="text-white text-decoration-none">Compare</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4 text-center">
            <h5 className="mb-3 ">Categories</h5>
            <ul className="list-unstyled ">
             
              <li><Link to="/Beautyproduct" className="text-white text-decoration-none">Beauty Products</Link></li>
              <li><Link to="/HomeKitchen" className="text-white text-decoration-none">Home & Kitchen</Link></li>
              <li><Link to="/Toyandgames" className="text-white text-decoration-none">Toys & Games</Link></li>
              <li><Link to="/Petsuplince" className="text-white text-decoration-none">Pet Supplies</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="bg-light" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 copyrights">&copy; WORLDWISE TRADING,LLC 2025 All Rights Reserved.</p>
        <Link to="/ContactForm">   <img src={img} alt="Payment Methods" width="200" className="d-none d-md-block" /> </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
