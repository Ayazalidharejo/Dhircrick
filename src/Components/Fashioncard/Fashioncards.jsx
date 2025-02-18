// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style.css"; // Custom CSS file
// import Cream from "../images/saven.jpg";
// import Cream2 from "../images/saven.jpg";
// import Cream3 from "../images/saven.jpg";
// import Cream4 from "../images/saven.jpg";
// import { Box } from "@mui/material";

// const categories = [
//   {
 
//     image: Cream,
//   },
//   {
   
//     image: Cream2,
//   },
//   {
 
//     image: Cream3,
//   },
//   {
   
//     image: Cream4,
//   },

// ];

// const Fashioncards = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {categories.map((category, index) => (
//           <div className="col-6 col-sm-6 col-md-3 mb-4" key={index}>
//             <div className="product-card">
//       <img src={category.image} alt="Baby Products" className="product-image" />
//       <div className="overlay">
     
//       </div>
//     </div>
//           </div>
//         ))}
//       </div>
     
//     </div>
//   );
// };

// export default Fashioncards;













// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style.css"; // Custom CSS file
// import Cream from "../images/saven.jpg";
// import Cream2 from "../images/saven.jpg";
// import Cream3 from "../images/saven.jpg";
// import Cream4 from "../images/saven.jpg";
// import { Box } from "@mui/material";

// const categories = [
//   {
//     image: Cream,
//   },
//   {
//     image: Cream2,
//   },
//   {
//     image: Cream3,
//   },
//   {
//     image: Cream4,
//   },
// ];

// const Fashioncards = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {categories.map((category, index) => (
//           <div className="col-6 col-sm-6 col-md-3 mb-4" key={index}>
//             <div className="product-card">
//               <img src={category.image} alt="Product" className="product-image" />
//               <div className="overlay">
//                 {/* You can add overlay text or other content here */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fashioncards;




import React from 'react';
import './Style.css';  // Import the CSS file

const Banner = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Card 1 */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="product-card forborder">
            <div className="image-wrapper">
              <img
                src="https://dhircrickllc.com/wp-content/uploads/2025/01/1-2.webp"
                alt="Product 1"
                className="product-image"
              />
              <div className="overlay">
                {/* <p>Product 1</p> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Card 2 */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="product-card forborder">
            <div className="image-wrapper">
              <img
                src="https://dhircrickllc.com/wp-content/uploads/2025/01/2-2.webp"
                alt="Product 2"
                className="product-image"
              />
              <div className="overlay">
                {/* <p>Product 2</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="product-card forborder">
            <div className="image-wrapper">
              <img
                src="https://dhircrickllc.com/wp-content/uploads/2025/01/3-2.webp"
                alt="Product 3"
                className="product-image"
              />
              <div className="overlay">
                {/* <p>Product 3</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="product-card forborder">
            <div className="image-wrapper">
              <img
                src="https://dhircrickllc.com/wp-content/uploads/2025/01/4-2.webp"
                alt="Product 4"
                className="product-image"
              />
              <div className="overlay">
                {/* <p>Product 4</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
