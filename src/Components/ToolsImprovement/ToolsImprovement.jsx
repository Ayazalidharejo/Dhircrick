import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Tooltip, Grid, Box, Button } from "@mui/material";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MenuIcon from '@mui/icons-material/Menu';

// Import product images
import one from "../images/smallhamer.jpg";
import two from "../images/bighamer.jpg";
import three from "../images/pipewrench.jpg";
import four from "../images/scroo.png";
import five from "../images/newtool.jpg";
import six from "../images/rangekit.jpg";
import saven from "../images/cuurtplas.jpg";
import eight from "../images/drial.jpg";
import nine from "../images/adjustbletool.jpg";
import ten from "../images/lockkit.jpg";
import onee from "../images/smallhamer.jpg";
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
  {id:138 , name: "smallhamer", price: "$12.99", category: "ToolsImprovement", image: one },
  {id:139, name: "bighamer", price: "$9.99", category: "ToolsImprovement", image: two },
  {id:140 , name: "pipewrench", price: "$19.99", category: "ToolsImprovement", image: three },
  {id:141, name: "scroo", price: "$9.99", category: "ToolsImprovement", image: four },
  {id:142, name: "newtool", price: "$36.88", category: "ToolsImprovement", image: five, discount: "-8%" },
  {id:143, name: "cuurtplas", price: "$9.99", category: "ToolsImprovement", image: six },
  {id:144, name: "drial", price: "$12.99", category: "ToolsImprovement", image: saven },
  {id:145, name: "adjustbletool", price: "$9.99", category: "ToolsImprovements", image: eight },
  {id:146, name: "lockkit", price: "$19.99", category: "ToolsImprovement", image: nine },
  {id:147, name: "smallhamer", price: "$9.99", category: "ToolsImprovement", image: onee },
  // {id:148, name: "Kitchen in the box", price: "$36.88", category: "Beauty Products", image: ten, discount: "-8%" },
];

const ToolsImprovement = () => {
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
          <div className="background headings ">
            <div className="d-flex align-items-center justify-content-center ">
              <KeyboardBackspaceIcon />
              <h1 className="ms-3 textmaine pt-3">Tools <span className="valuee"> & Improvement</span></h1>
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
              <Button variant="contained" color="primary" className="mt-2">FILTER</Button>
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
                  <span>Home</span> / <span>Tools & Improvement</span>
                </div>
                <div className="d-flex justify-content-center ps-5  hide-xs">
                  <div className="d-flex align-items-center text-black"><span>Show :</span> <span>9 / 12 /18</span></div>
                  {/* <Button onClick={() => handleColumnChange(2)} variant="outlined" className="mx-2"><DragHandleIcon /> </Button> */}
                  <Button onClick={() => handleColumnChange(4)} variant="outlined" className="mx-2"><MenuIcon /> </Button>
                  <Button onClick={() => handleColumnChange(6)} variant="outlined" className="mx-2"><MenuIcon /> </Button>
                </div>
                <select  
                  className="form-select w-auto responsive-padding"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="">Sort by Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
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
                        <span className="badge bg-primary position-absolute">{product.discount}</span>
                      )}
                      <Tooltip title={product.name}>
                        <h6 className="mt-2">
                          {product.name.length > 10 ? `${product.name.slice(0, 10)}...` : product.name}
                        </h6>
                      </Tooltip>
                      <p className="fw-bold text-primary">{product.price}</p>
                      <Button onClick={() => dispatch(addProduct(product))} variant="contained" color="primary" className="">Add</Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToolsImprovement;
