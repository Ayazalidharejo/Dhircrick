import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



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

import "./Style.css";

import { addProduct } from "../Slice/Slice";
import { useDispatch } from "react-redux";


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
  const [priceRange, setPriceRange] = useState(70); 
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [columnsPerRow, setColumnsPerRow] = useState(4); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const dispatch = useDispatch();


  const handlePriceChange = (event) => {
    const rangeValue = event.target.value;
    setPriceRange(rangeValue);

  
    const filtered = allProducts.filter((product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return price <= rangeValue;
    });

    setFilteredProducts(filtered);
  };


  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);


    const filteredByCategory = category
      ? allProducts.filter((product) => product.category === category)
      : allProducts;

    setFilteredProducts(filteredByCategory);
  };

  const handleColumnChange = (newColumns) => {
    setColumnsPerRow(newColumns);
  };

  return (
    <>
      <div className="text-white py-">
        <div className="container-fuild main">
          <div className="bg-black headings py-5 ">
            <div className="d-flex align-items-center justify-content-center ">
              <KeyboardBackspaceIcon />
              <h1 className="ms-3 textmaine pt-3">Wishlist</h1>

             
            </div>
            <div className="text-center">  
              <a className="text-decoration-none text-white" href="/">   <span>Home</span></a> / <span>Wishlist</span>
              </div>
           
          </div>

        
       
        </div>
      </div>
      <div className="wishlist-container d-flex align-items-center justify-content-center vh-50">
      <div className="text-center my-3">
        <div className="wishlist-icon">
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
        <h2 className="mt-3">This wishlist is empty.</h2>
        <p>You don’t have any products in the wishlist yet.</p>
        <p>You will find a lot of interesting products on our "Shop" page.</p>
        <a href="/HomeKitchen" className="btn-color text-white mb-3-2 btn">
          RETURN TO SHOP
        </a>
      </div>
    </div>
    
    </>
  );
};

export default Favirate;
