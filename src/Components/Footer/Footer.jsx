import React from "react";
import ft from "../images/logo.png"
import img from "../images/ft.png"
import "./Style.css"

const Footer = () => {
  return (
    <footer className=" background text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="mb-3">N-YIYI 346, </h5>
            {/* <img style={{width:"100px"}} src={img} alt="" /> */}
            <p>Business Address: 6841 W Oakton St. | Niles, IL 60714</p>
            <p>Phone Number:  630 547 2064</p>
            <p>Warehouse Addres: 1401 Centre Cir | Downers Grove, IL 60515</p>
            <p>info@nyiy346.com</p>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none my-3">Home</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Shop</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Cart</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Checkout</a></li>
              <li><a href="#" className="text-white fw-bold  text-decoration-none my-3">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Info Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white  text-decoration-none my-3">Return Policy</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Privacy Policy</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">About us</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Wishlist</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Compare</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Top Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white  text-decoration-none my-3">Home & Kitchen</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Baby Products</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Toys & Games</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Office Products</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Account Details</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white  text-decoration-none my-3">Dashboard</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Orders</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Downloads</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Addresses</a></li>
              <li><a href="#" className="text-white  text-decoration-none my-3">Login/Logout</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; N-YIYI 346,  2025 All Rights Reserved.</p>
          <div>
            <img src={img} alt="Visa" width="240" className="me-2" />
            {/* <img src="mastercard.png" alt="Mastercard" width="40" className="me-2" />
            <img src="paypal.png" alt="PayPal" width="40" className="me-2" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;