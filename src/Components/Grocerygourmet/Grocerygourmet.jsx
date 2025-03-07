import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { Tooltip, Grid, Box, Button } from "@mui/material";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MenuIcon from '@mui/icons-material/Menu';

// Import product images
import one from "../images/papaya.jpg";
import two from "../images/freshpapaya.jpg";
import three from "../images/tamato.jpg";
import four from "../images/patato.jpg";
import five from "../images/greenchilecheese.jpg";
import six from "../images/gracerystock.jpg";
import saven from "../images/orange.jpg";
import eight from "../images/strawbery.jpg";
import nine from "../images/tamato.jpg";
import ten from "../images/lays.jpg";
import onee from "../images/fish.jpg";
import Footer from "../Footer/Footer";

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
  {id:61, name: "papaya", price: "$12.99", category: "Grocery", image: one },
  {id:62, name: "freshpapaya", price: "$9.99", category: "Grocery", image: two },
  {id:63, name: "fresh tamato", price: "$19.99", category: "Grocery", image: three },
  {id:64, name: "fresh patato", price: "$9.99", category: "Grocery", image: four },
  {id:65, name: "greenchilecheese", price: "$36.88", category: "Grocery", image: five, discount: "-8%" },
  {id:66, name: "gracerystock", price: "$9.99", category: "Grocery", image: six },
  {id:67, name: "Fresh orange", price: "$12.99", category: "Grocery", image: saven },
  {id:68, name: "strawbery", price: "$9.99", category: "Grocery", image: eight },
  {id:69, name: "tamato fresh", price: "$19.99", category: "Grocery", image: nine },
  {id:70, name: "lays,spice", price: "$9.99", category: "Grocery", image: onee },
  {id:71, name: "fish fresh", price: "$36.88", category: "Grocery", image: ten, discount: "-8%" },
];

const Grocerygourmet = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value) {
      navigate(event.target.value);
    }
  };



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
          <div className="backgroundcolor headings ">
            <div className="d-flex align-items-center justify-content-center ">
              <KeyboardBackspaceIcon />
              <h1 className="ms-3 textmaine pt-3">Grocery & Gourmet</h1>
            </div>

            {/* Category Links Section */}
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
            </div>
          </div>

          {/* Sidebar and Product Grid using Material UI Grid */}
          <Grid container spacing={0} mx={0}>
            {/* Sidebar */}
            <Grid item xs={12} sm={6} md={3} className="bg-light p-4">
              <h5>FILTER BY PRICE</h5>
              <input
                type="range"
                className="form-range"
                min="0"
                max="70"
                value={priceRange}
                onChange={handlePriceChange}
              />
              <Button className="mt-2 btn-color text-white">FILTER</Button>
              <p className="text-black">Max Price: ${priceRange}</p>
              <h5 className="mt-4 text-black">STOCK STATUS</h5>
              <div className="text-black">
                <input type="checkbox" id="sale" /> <label htmlFor="sale">On sale</label>
              </div>
              <div className="text-black">
                <input type="checkbox" id="stock" /> <label htmlFor="stock">In stock</label>
              </div>
              <h5 className="mt-4 text-black">TOP RATED PRODUCTS</h5>
              <ul className="list-unstyled">
                {[one, three, ten].map((img, idx) => {
                  const product = allProducts.find(p => p.image === img);
                  return (
                    <div key={idx}>
                      <li className="d-flex align-items-center text-black">
                        <img style={{ width: "100px" }} src={img} alt="Top rated" />
                        <span>{product?.name}</span> - <span className="text-primary text-black">{product?.price}</span>
                      </li>
                      <hr style={{ width: "100%", borderTop: "1px solid #000", margin: "10px 0" }} />
                    </div>
                  );
                })}
              </ul>
            </Grid>

            {/* Product Grid */}
            <Grid item xs={12} md={9}>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div className="text-black fw-bold  hide-xs">
                  <span>Home</span> / <span>Grocery & Gourmet</span>
                </div>
                <div className="d-flex justify-content-center ps-5  hide-xs">
                  <div className="d-flex align-items-center text-black"><span>Show :</span> <span>9 / 12 /18</span></div>
                
                  <Button onClick={() => handleColumnChange(4)}  className="mx-2 bcolor"><MenuIcon /> </Button>
                  <Button onClick={() => handleColumnChange(6)}  className="mx-2 bcolor"><MenuIcon /> </Button>
                </div>
                <select
      className="form-select w-auto responsive d-block d-md-none"
      onChange={handleChange}
    >
      <option value="">Sort by Category</option>
      <option value="/Babyproduct">Baby Products</option>
      <option value="/Beautyproduct">Beauty Products</option>
      <option value="/Grocerygourmet">Grocery & Gourmet</option>
      <option value="/HomeKitchen">Home & Kitchen</option>
      <option value="/Lawnpatioparden">Lawn, Patio & Garden</option>
      <option value="/Officeproducts">Office Products</option>
      <option value="/Petsuplince">Pet Supplies</option>
      <option value="/Supplements">Supplements</option>
      <option value="/ToolsImprovement">Tools & Improvement</option>
      <option value="/Toyandgames">Toys & Games</option>
      <option value="/Sportsandoutdoor">Sports and Outdoor</option>
    </select>
              </div>

              {/* Product Grid */}
              <Grid container spacing={0}>
                {filteredProducts.map((product, index) => (
                  <Grid item xs={6} sm={6} md={4} lg={columnsPerRow === 6 ? 2 : 3} key={index}>
                    <Box className="card p-3 shadow-sm border-0 d-flex align-items-center">
                      <img
                        style={{ maxHeight: "100px", minHeight: "100px", maxWidth: "100px", minWidth: "100px" }}
                        src={product.image}
                        alt={product.name}
                        className="img-fluid imagebg"
                      />
                      {product.discount && (
                        <span className="badge btn-color text-white position-absolute">{product.discount}</span>
                      )}
                      <Tooltip title={product.name}>
                        <h6 className="mt-2">
                          {product.name.length > 10 ? `${product.name.slice(0, 10)}...` : product.name}
                        </h6>
                      </Tooltip>
                      <p className="fw-bold bcolor">{product.price}</p>
                      <Button onClick={() => dispatch(addProduct(product))}  className="btn-color text-white">Add to cart</Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

    </>
  );
};

export default Grocerygourmet;
