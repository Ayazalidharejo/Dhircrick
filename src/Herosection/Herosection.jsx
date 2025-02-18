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

// Mobile images
import image1 from "../Components/images/mbl-banners-1.webp";
import image2 from "../Components/images/mbl-banners-2.webp";
import image3 from "../Components/images/mbl-banners-3.webp";

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
              <img className="d-block w-100 hero-image" src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-1.webp" alt="Desktop Banner 1" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/HomeKitchen">
              <img className="d-block w-100 hero-image" src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-3.webp" alt="Desktop Banner 2" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/Petsuplince">
              <img className="d-block w-100 hero-image" src="https://dhircrickllc.com/wp-content/uploads/2025/01/banners-2.webp" alt="Desktop Banner 3" />
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
    </>
  );
};

export default Herosection;
