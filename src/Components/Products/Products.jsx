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
import Discountproduct from "../Discoutproduct/Discountproduct";

const products = [
  { id: 28, name: "wash bason", category: "Tools", price: 29.99, image: fan, hoverImage: fan },
  { id: 29, name: "face wash cream", category: "Beauty product", price: 14.99, image: cream, hoverImage: cream },
  { id: 30, name: "kichen kit", category: "Home kichen", price: 56.00, image: bottle, hoverImage: bottle },
  { id: 31, name: "Chair", category: "Office Product", price: 14.99, image: babycream, hoverImage: babycream },
  { id: 32, name: "Face wash", category: "Beauty Products", price: 10.99, image: botle, hoverImage: botle },
  { id: 33, name: "Kichen set", category: "Home kichen", price: 8.99, image: botle2, hoverImage: botle2 },
  { id: 34, name: "Calculator", category: "Office product", price: 25.99, image: botle3, hoverImage: botle3 },
  { id: 35, name: "new modal chair", category: "Office product", price: 49.99, image: babycream, hoverImage: babycream },
  { id: 36, name: "Sink cock", category: "tools", price: 12.99, image: fan },
  { id: 37, name: "New modal chair", category: "Office product", price: 18.99, image: sampo, hoverImage: sampo },
  { id: 38, name: "Gas kit", category: "Home and kichen", price: 18.99, image: sampo1, hoverImage: sampo1 },
];

const ProductGrid = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("Products"); // New state for section control

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4 body">
      <h2 className="text-center">Featured Products</h2>

      {/* Category Buttons */}
      <div className="text-center">
        <ol className="d-flex text-center justify-content-center list-unstyled">
          <li className="mx-2">
            <button
              className={`border-0 p-1 btn-custom ${activeSection === "Petsuplince" ? "active" : ""}`}
              onClick={() => setActiveSection("Petsuplince")}
            >
              Petsuplince
            </button>
          </li>
          <li>
            <button
              className={`border-0 p-1 btn-custom ${activeSection === "Products" ? "active" : ""}`}
              onClick={() => setActiveSection("Products")}
            >
              New Arrivals
            </button>
          </li>
        </ol>
      </div>

      {/* Conditional Rendering */}
      {activeSection === "Products" ? (
        <div className="row">
          {searchedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div className="card shadow-sm border-0 d-flex align-items-center">
                <div style={{ maxWidth: "160px", minWidth: "160px", maxHeight: "160px", minHeight: "160px" }} className="product-img-container">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    onMouseEnter={(e) => e.target.src = product.hoverImage}
                    onMouseLeave={(e) => e.target.src = product.image}
                  />
                </div>
                <div style={{ width: "300px" }} className="card-body text-center">
                  <Tooltip title={product.name} placement="top-start">
                    <h6 className="card-title">
                      {product.name.length > 10 ? product.name.slice(0, 10) + "..." : product.name}
                    </h6>
                  </Tooltip>
                  <p className="text-muted">{product.category}</p>
                  <h5 className="text-black">${product.price.toFixed(2)}</h5>
                  <button
                    onClick={() => dispatch(addProduct(product, toast))}
                    className="btncolor btn-responsive w-md-75 w-sm-25"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
            <Discountproduct/>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
