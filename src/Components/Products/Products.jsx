// import React, { useState } from "react";
// import babycream from "../images/babycream11.png";
// import bottle from "../images/kk.png";
// import cream from "../images/saven.jpg";
// import fan from "../images/than.png";
// import botle from "../images/saven.jpg";
// import botle2 from "../images/kk.png";
// import botle3 from "../images/babycream11.png";
// import sampo from "../images/than.png";
// import sampo1 from "../images/babycream11.png";
// import sampo2 from "../images/saven.jpg";
// import sampo3 from "../images/than.png";
// import sampo4 from "../images/babycream11.png";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../Slice/Slice";
// import { ToastContainer, toast } from 'react-toastify';
// import { Tooltip } from "@mui/material";
// import "./Style.css";

// const products = [
//   { id: 1, name: "TREL Mini Handheld Stroller Fan", category: "Baby Products", price: 29.99, image: fan, hoverImage: bottle },
//   { id: 2, name: "Douxo S3 PYO Pads 30 Count fan", category: "Pet Supplies", price: 14.99, image: cream, hoverImage: sampo1 },
//   { id: 3, name: "OLLY Ultra Strength Goodbye Stress", category: "Supplements", price: 56.00, image: bottle, hoverImage: sampo2 },
//   { id: 4, name: "Matys Multipurpose Baby Ointment", category: "Baby Products", price: 14.99, image: babycream, hoverImage: sampo3 },
//   { id: 5, name: "Baby Diaper Rash Cream", category: "Baby Products", price: 10.99, image: botle, hoverImage: sampo4 },
//   { id: 6, name: "Dog Chew Toy", category: "Pet Supplies", price: 8.99, image: botle2, hoverImage: fan },
//   { id: 7, name: "Fitness Tracker", category: "Supplements", price: 25.99, image: botle3, hoverImage: cream },
//   { id: 8, name: "Protein Powder", category: "Supplements", price: 49.99, image: babycream, hoverImage: bottle },
//   { id: 9, name: "Dog Shampoo", category: "Pet Supplies", price: 12.99, image: fan, hoverImage: sampo2 },
//   { id: 10, name: "Vitamins for Kids", category: "Supplements", price: 18.99, image: sampo, hoverImage: babycream },
//   { id: 10, name: "Vitamins for Kids", category: "", price: 18.99, image: sampo, hoverImage: babycream },
// ];

// const uniqueCategories = ["All", ...new Set(products.map(p => p.category))];

// const ProductGrid = () => {
//   const dispatch = useDispatch();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = selectedCategory === "All"
//     ? products
//     : products.filter(product => product.category === selectedCategory);

//   const searchedProducts = filteredProducts.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">NEW ARRIVALS</h2>

//       {/* <div className="d-flex justify-content-center mb-3">
//         {uniqueCategories.map(category => (
//           <button
//             key={category}
//             className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div> */}

//       <div className="d-flex justify-content-center mb-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="form-control w-50"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="row">
//         {searchedProducts.map((product) => (
//           <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
//             <div className="card shadow-sm border-0 d-flex align-items-center">
//               {/* Hoverable product image */}
//               <div className="product-img-container">
//                 <img
//                   className="product-image"
//                   src={product.image}
//                   alt={product.name}
//                   onMouseEnter={(e) => e.target.src = product.hoverImage}  // Hover event to change the image
//                   onMouseLeave={(e) => e.target.src = product.image}      // Mouse leave event to revert to the original image
//                 />
//               </div>
//               <div className="card-body text-center">
//                 <Tooltip title={product.name} placement="top-start">
//                   <h6 className="card-title">
//                     {product.name.length > 10 ? product.name.slice(0, 10) + "..." : product.name}
//                   </h6>
//                 </Tooltip>
//                 <p className="text-muted">{product.category}</p>
//                 <h5 className="text-black">${product.price.toFixed(2)}</h5>
//                 <button
//                   onClick={() => dispatch(addProduct(product, toast))}
//                   className="btn btn-warning w-100"
//                 >
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;




import React, { useState, useEffect } from "react";
import babycream from "../images/chair1.jpg";
import bottle from "../images/kk.png";
import cream from "../images/saven.jpg";
import fan from "../images/m.jpg";
import botle from "../images/saven.jpg";
import botle2 from "../images/kk.png";
import botle3 from "../images/calculator.jpg";
import sampo from "../images/chair.jpg";
import sampo1 from "../images/foodmaker.jpg";
import sampo2 from "../images/adjustbletool.jpg";
import sampo3 from "../images/Gaskit.jpg";
import sampo4 from "../images/b5.jpg";
import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/Slice";
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip } from "@mui/material";
import "./Style.css";

const products = [
  { id: 28, name: "wash bason", category: "Tools", price: 29.99, image: fan, hoverImage: fan, },
  { id: 29, name: "face wash cream", category: "Beauty product", price: 14.99, image: cream,hoverImage: cream,  },
  { id: 30, name: "kichen kit", category: "Home kichen", price: 56.00, image: bottle, hoverImage: bottle,  },
  { id: 31, name: "Chair", category: "Office Product", price: 14.99, image: babycream,hoverImage: babycream,  },
  { id: 32, name: "Face wash", category: "Beauty Products", price: 10.99, image: botle, hoverImage: botle,  },
  { id: 33, name: "Kichen set", category: "Home kichen", price: 8.99, image: botle2,hoverImage: botle2, },
  { id: 34, name: "Calculator", category: "Office product", price: 25.99, image: botle3,hoverImage: botle3, },
  { id: 35, name: "new modal chair", category: "Office product", price: 49.99, image: babycream,hoverImage: babycream,  },
  { id: 36, name: "Sink cock", category: "tools", price: 12.99, image: fan, },
  { id: 37, name: "New modal chair", category: "Office product", price: 18.99, image: sampo,hoverImage: sampo,  },
  { id: 38, name: "Gas kit", category: "Home and kichen", price: 18.99, image: sampo1 ,hoverImage: sampo1  },
];

const uniqueCategories = ["All", ...new Set(products.map(p => p.category))];

const ProductGrid = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Store products in localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []); // Empty dependency array to run only once on mount

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4 body">
      {/* <h2 className="text-center">NEW ARRIVALS</h2> */}

      {/* Search input */}
      {/* <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      {/* Product Grid */}
      <div className="row">
        {searchedProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
            <div className="card shadow-sm border-0 d-flex align-items-center">
              {/* Hoverable product image */}
              <div className="product-img-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                  onMouseEnter={(e) => e.target.src = product.hoverImage}  // Hover event to change the image
                  onMouseLeave={(e) => e.target.src = product.image}      // Mouse leave event to revert to the original image
                />
              </div>
              <div className="card-body text-center">
                <Tooltip title={product.name} placement="top-start">
                  <h6 className="card-title">
                    {product.name.length > 10 ? product.name.slice(0, 10) + "..." : product.name}
                  </h6>
                </Tooltip>
                <p className="text-muted">{product.category}</p>
                <h5 className="text-black">${product.price.toFixed(2)}</h5>
                <button
                  onClick={() => dispatch(addProduct(product, toast))}
                  className="btn btn-primary w-100"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
