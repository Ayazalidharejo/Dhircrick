// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Style.css"; // Custom CSS file
// // import Cream from "../images/saven.jpg";
// // import Cream2 from "../images/saven.jpg";
// // import Cream3 from "../images/saven.jpg";
// // import Cream4 from "../images/saven.jpg";
// // import { Box } from "@mui/material";

// // const categories = [
// //     {
// //         id: 1,
// //         title: "BOOTAA 29” LARGE DART BOARD",
// //         description: "Fun, dart board games will improve attention levels, hand-eye coordination.",
// //         price: "$15.99",
// //         image: one,
// //         bgColor: "#E8F41C",
// //         link: "/Kichenmaine", // Link for the first product
// //       },
// //     {
// //         id: 2,
// //         title: "BREAKFAST SANDWICH MAKER",
// //         description: "Breakfast sandwich maker cooks your custom sandwich in just a few minutes.",
// //         price: "$46.99",
// //         image: two,
// //         bgColor: "#274CFA",
// //         link: "/Tyand_gamesmaine", // Link for the second product
// //       },
 

// // ];

// // const Simplecard = () => {
// //   return (
// //     <div className="container mt-5">
// //       <div className="row">
// //         {categories.map((category, index) => (
// //           <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
// //             <div className="product-card">
// //       <img src={category.image} alt="Baby Products" className="product-image" />
// //       <div className="overlay">
     
// //       </div>
// //     </div>
// //           </div>
// //         ))}
// //       </div>
     
// //     </div>
// //   );
// // };

// // export default Simplecard;


// import React from "react";
// import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
// import one from "../images/than.png";
// import two from "../images/than.png";

// const ProductShowcase = () => {
//   const products = [
//     {
//       id: 1,
//       title: "BOOTAA 29” LARGE DART BOARD",
//       description: "Fun, dart board games will improve attention levels, hand-eye coordination.",
//       price: "$15.99",
//       image: one,
//       bgColor: "#E8F41C",
//       link: "/Kichenmaine", // Link for the first product
//     },
//     {
//       id: 2,
//       title: "BREAKFAST SANDWICH MAKER",
//       description: "Breakfast sandwich maker cooks your custom sandwich in just a few minutes.",
//       price: "$46.99",
//       image: two,
//       bgColor: "#274CFA",
//       link: "/Tyand_gamesmaine", // Link for the second product
//     },
//   ];

//   return (
//     <div className="container my-4">
//       <div className="row g-3">
//         {products.map((product) => (
//           <div key={product.id} className="col-12 col-md-6">
//             <Link to={product.link} className="text-decoration-none"> {/* Adding Link to wrap the card */}
//               <div
//                 className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
//                 style={{ backgroundColor: product.bgColor }}
//               >
//                 <div className="text-light">
//                   <h3 className="fw-bold">{product.title}</h3>
//                   <p className="text-black fw-bold">{product.description}</p>
//                   <h4 className="fw-bold">ONLY FOR <span className="text-dark">{product.price}</span></h4>
//                   <button className="btn btn-dark mt-2">SHOP NOW!</button>
//                 </div>
//                 <div className="product-card">

//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="img-fluid mt-3 mt-md-0"
//                   style={{ maxWidth: "200px", borderRadius: "10px" }}
//                 />
//                  <div className="overlay">
     
//      </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;











import React from "react";
import one from "../images/than.png";  // Import your product images
import two from "../images/than.png";

const ProductShowcase = () => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        {/* First Product */}
        <div className="col-12 col-md-6">
          <a
            href="/Supplements" // Using anchor tag for navigation
            className="text-decoration-none"
          >
            <div
              className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
              style={{ backgroundColor: "#E8F41C", cursor: "pointer" }}
            >
              <div className="text-light">
                <h3 className="fw-bold">BOOTAA 29” LARGE DART BOARD</h3>
                <p className="text-black fw-bold">
                  Fun, dart board games will improve attention levels, hand-eye coordination.
                </p>
                <h4 className="fw-bold">
                  ONLY FOR <span className="text-dark">$15.99</span>
                </h4>
                <button className="btn btn-dark mt-2">SHOP NOW!</button>
              </div>
              <div className="product-card">
                <img
                  src={one}
                  alt="BOOTAA 29” LARGE DART BOARD"
                  className="img-fluid mt-3 mt-md-0"
                  style={{ maxWidth: "200px", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

        {/* Second Product */}
        <div className="col-12 col-md-6">
          <a
            href="/HomeKitchen" // Using anchor tag for navigation
            className="text-decoration-none"
          >
            <div
              className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
              style={{ backgroundColor: "#274CFA", cursor: "pointer" }}
            >
              <div className="text-light">
                <h3 className="fw-bold">BREAKFAST SANDWICH MAKER</h3>
                <p className="text-black fw-bold">
                  Breakfast sandwich maker cooks your custom sandwich in just a few minutes.
                </p>
                <h4 className="fw-bold">
                  ONLY FOR <span className="text-dark">$46.99</span>
                </h4>
                <button className="btn btn-dark mt-2">SHOP NOW!</button>
              </div>
              <div className="product-card">
                <img
                  src={two}
                  alt="BREAKFAST SANDWICH MAKER"
                  className="img-fluid mt-3 mt-md-0"
                  style={{ maxWidth: "200px", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
