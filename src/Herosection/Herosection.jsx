// import React from 'react';
// import './Hero.css'; // Custom CSS for additional styling
// ////
// // this image you can show is sm screen 

// import image1 from "../Components/images/mbl-banners-1.webp"
// import image2 from "../Components/images/mbl-banners-2.webp"
// import image3 from "../Components/images/mbl-banners-3.webp"

// ////

// const Herosection = () => {
//   return (
//     <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <a href="https://dhircrickllc.com/shop">
//             <img
//               className="d-block w-100 hero-image"
//               src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-1.webp"
//               alt="Banner 1"
//             />
//           </a>
//         </div>
//         <div className="carousel-item">
//           <a href="https://dhircrickllc.com/shop">
//             <img
//               className="d-block w-100 hero-image"
//               src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-3.webp"
//               alt="Banner 2"
//             />
//           </a>
//         </div>
//         <div className="carousel-item">
//           <a href="https://dhircrickllc.com/shop">
//             <img
//               className="d-block w-100 hero-image"
//               src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-2.webp"
//               alt="Banner 3"
//             />
//           </a>
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Herosection;






import React from "react";
import "./Hero.css"; // Custom CSS for additional styling
import { Rating } from "@mui/material";
// Mobile images
// Mobile images
import image1 from "../Components/images/web1.png";
import image2 from "../Components/images/web2.png";
import image3 from "../Components/images/web3.png";

///Laptop
import image4 from "../Components/images/web1.png";
import image5 from "../Components/images/web2.png";
import image6 from "../Components/images/web3.png";


const Herosection = () => {
  return (
    <>
      {/* Mobile Carousel (Visible only on small screens) */}
      <div id="heroCarouselMobile" className="carousel slide d-md-none" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/HomeKitchen">
              <img className="d-block w-100 hero-image" src={image1} alt="Mobile Banner 1" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/HomeKitchen">
              <img className="d-block w-100 hero-image" src={image2} alt="Mobile Banner 2" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/Petsuplince">
              <img className="d-block w-100 hero-image" src={image3} alt="Mobile Banner 3" />
            </a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarouselMobile" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarouselMobile" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Desktop Carousel (Visible only on medium and larger screens) */}
      <div id="heroCarouselDesktop" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/HomeKitchen">
              <img className="d-block w-100 hero-image" src={image4} alt="Desktop Banner 1" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/HomeKitchen">
              <img className="d-block w-100 hero-image" src={image5} alt="Desktop Banner 2" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/Petsuplince">
              <img className="d-block w-100 hero-image" src={image6} alt="Desktop Banner 3" />
            </a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarouselDesktop" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarouselDesktop" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    <div className="text-center mt-3 d-flex align-items-center justify-content-center">
      <h3>Excellent</h3>
      <div className="flex items-center">
        {/* MUI Rating component with value of 4.5 */}
        <Rating name="read-only" value={4.5} readOnly precision={0.5} />
      </div>
      <span>Based on 354 reviews</span>
    </div>


    </>
  );
};

export default Herosection;
