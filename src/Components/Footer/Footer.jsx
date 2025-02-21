




// import React from "react";
// import { Link } from "react-router-dom";
// import img from "../images/ft.png";
// import "./Style.css";

// const Footer = () => {
//   return (
//     <footer className="backgroundcolor text-white py-4 mt-auto">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3 ">
//           <h5 className="mb-3 d-none d-md-block">WORLDWISETRADINGLL</h5>

//             <p>Phone Number: +1 (832) 875-2999</p>
//             <p>Warehouse Address: HAMIDA AASLAM MEGHANT SOLE MBR 9535 MCDOWELL DR RICHMOND,TX 77469</p>
//             <p>worldwisetradingllc.info@gmail.com</p>
//           </div>
//           <div className="col-md-3  text-center d-none d-md-block">
//   <h5 className="mb-3">Quick Links</h5>
//   <ul className="list-unstyled">
//     <li><Link to="/" className="text-white text-decoration-none my-3">Home</Link></li>
//     <li><Link to="/Shop" className="text-white text-decoration-none my-3">Shop</Link></li>
//     <li><Link to="/Checkout" className="text-white text-decoration-none my-3">Checkout</Link></li>
//     <li><Link to="/ContactForm" className="text-white fw-bold text-decoration-none my-3">Contact us</Link></li>
//   </ul>
// </div>

         
//           <div className="col-md-3 sm-12">
//             <h5 className="mb-3">Policy Page </h5>
//             <ul className="list-unstyled">
//               <li><Link to="/AboutUs" className="text-white text-decoration-none my-3">About Us</Link></li>
//               <li><Link to="/Turms" className="text-white text-decoration-none my-3">Terms of Service</Link></li>
//               <li><Link to="/Toyandgames" className="text-white text-decoration-none my-3">Shipping Policy</Link></li>
//               <li><Link to="/Privacy" className="text-white text-decoration-none my-3">Privacy</Link></li>
//             </ul>
//           </div>
//           <div className="col-md-3 sm-12">
//             <h5 className="mb-3">Top Categories</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/Petsuplince" className="text-white text-decoration-none my-3">Pet Supplies</Link></li>
//               <li><Link to="/Beautyproduct" className="text-white text-decoration-none my-3">Beauty Products</Link></li>
//               <li><Link to="/HomeKitchen" className="text-white text-decoration-none my-3">Home & Kitchen</Link></li>
//               <li><Link to="/Toyandgames" className="text-white text-decoration-none my-3">Toys & Games</Link></li>
           
//             </ul>
//           </div>
//         </div>
//         <hr className="bg-light" />
//         <div className="d-flex justify-content-between align-items-center">
//           <p className="mb-0">&copy; WORLDWISETRADINGLL 2025 All Rights Reserved.</p>
//           <div className="d-none d-md-block">
//   <img src={img} alt="Visa" width="240" className="me-2" />
// </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









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
