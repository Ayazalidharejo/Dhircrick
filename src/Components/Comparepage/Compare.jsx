import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Tooltip, Grid, Box, Button } from "@mui/material";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MenuIcon from '@mui/icons-material/Menu';

// Import product images
import one from "../images/babycream11.png";
import two from "../images/babycream11.png";
import three from "../images/babycream11.png";
import four from "../images/babycream11.png";
import five from "../images/babycream11.png";
import six from "../images/babycream11.png";
import saven from "../images/saven.jpg";
import eight from "../images/saven.jpg";
import nine from "../images/saven.jpg";
import ten from "../images/saven.jpg";
import onee from "../images/than.png";
import Footer from "../Footer/Footer";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import "./Style.css";

import { addProduct } from "../Slice/Slice";
import { useDispatch } from "react-redux";

// Categories Data with links for each category
const categories = [
  { name: "Baby Products", products: 14, cat: "Product", link: "/Babyproduct" },
  { name: "Beauty Products", products: 11, cat: "Product", link: "/Beautyproduct" },
  { name: "Grocery & Gourmet", products: 9, cat: "Product", link: "/Grocerygourmet" },
  { name: "Home & Kitchen", products: 11, cat: "Product", link: "/HomeKitchen" },
  { name: "Lawn, Patio & Garden", products: 3, cat: "Product", link: "/Lawnpatioparden" },
  { name: "Office Products", products: 12, cat: "Product", link: "/Officeproducts" },
  { name: "Pet Supplies", products: 12, cat: "Product", link: "/Petsuplince" },
  { name: "Supplements", products: 10, cat: "Product", link: "/Supplements" },
  { name: "Tools & Improvement", products: 4, cat: "Product", link: "/ToolsImprovement" },
  { name: "Toys & Games", products: 10, cat: "Product", link: "/Toyandgames" },
  { name: "Sports and Outdoor", products: 10, cat: "Product", link: "/Sportsandoutdoor" },
];

// Products Data
const allProducts = [
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", category: "Home & Kitchen", image: one },
  { name: "Zulay Kitchen Silicone", price: "$9.99", category: "Home & Kitchen", image: two },
  { name: "Sunnecko Heavy Duty Kitchen", price: "$19.99", category: "Home & Kitchen", image: three },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", category: "Home & Kitchen", image: four },
  { name: "Kitchen in the box", price: "$36.88", category: "Home & Kitchen", image: five, discount: "-8%" },
  { name: "iBayam Kitchen Shears", price: "$9.99", category: "Home & Kitchen", image: six },
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", category: "Beauty Products", image: saven },
  { name: "Zulay Kitchen Silicone", price: "$9.99", category: "Beauty Products", image: eight },
  { name: "Sunnecko Heavy Duty Kitchen", price: "$19.99", category: "Beauty Products", image: nine },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", category: "Beauty Products", image: onee },
  { name: "Kitchen in the box", price: "$36.88", category: "Beauty Products", image: ten, discount: "-8%" },
];

const Favirate = () => {
  const [priceRange, setPriceRange] = useState(70); // Default max price is 70
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [columnsPerRow, setColumnsPerRow] = useState(4); // Default number of columns per row is 4
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const dispatch = useDispatch();

  // Function to handle range input and filter products
  const handlePriceChange = (event) => {
    const rangeValue = event.target.value;
    setPriceRange(rangeValue);

    // Filter products based on price range
    const filtered = allProducts.filter((product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return price <= rangeValue;
    });

    setFilteredProducts(filtered);
  };

  // Function to handle category change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // Filter products based on selected category
    const filteredByCategory = category
      ? allProducts.filter((product) => product.category === category)
      : allProducts;

    setFilteredProducts(filteredByCategory);
  };

  // Function to handle column change based on button click
  const handleColumnChange = (newColumns) => {
    setColumnsPerRow(newColumns);
  };

  return (
    <>
      <div className="text-white py-">
        <div className="container-fuild main">
          <div className="background headings py-5 ">
            <div className="d-flex align-items-center justify-content-center ">
              <KeyboardBackspaceIcon />
              <h1 className="ms-3 textmaine pt-3">Compare</h1>

             
            </div>
            <div className="text-center">  
              <a className="text-decoration-none text-white" href="/">   <span>Home</span></a> / <span>Compare</span>
              </div>
            {/* Category Links Section
            <div className="d-flex justify-content-center align-items-center text-center py-2">
              <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center text-center ">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="my-2 mx-2 col-12 col-sm-6 col-md-3 col-lg-2 catogarynames"
                  >
                    <Link to={category.link} className="text-decoration-none">
                      <span className="productname">{category.name}</span> <br />
                      <span className="colorer">{category.products} {category.cat}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Sidebar and Product Grid using Material UI Grid */}
       
        </div>
      </div>
      <div className="wishlist-container d-flex align-items-center justify-content-center vh-50">
      <div className="text-center">
        <div className="wishlist-icon py-3">
          <span role="img" aria-label="heart">
          <CurrencyExchangeIcon />
          </span>
        </div>
        <h2 className="mt-3">Compare list is empty.</h2>
        <p>You don’t have any products in the wishlist yet.</p>
        <p>You will find a lot of interesting products on our "Shop" page.</p>
        <a href="/HomeKitchen" className="btn btn-primary">
          RETURN TO SHOP
        </a>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Favirate;
