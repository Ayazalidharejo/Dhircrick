import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import userIcon from '@iconify-icons/fa-solid/user';
import heartIcon from '@iconify-icons/fa-solid/heart';
import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';
import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';
import { Link, Outlet, useNavigate } from "react-router-dom";
import image from "../images/slogo.webp";
import { Badge, Drawer, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import "./Layout.css";
// "https://dhircrickllc.com/wp-content/uploads/2021/09/dhir-crickllc-2-e1736772353637.png"

import { useDispatch } from "react-redux";
import { setSearchTerm } from "../Slice/Searchturms";
import SigninDrawer from "../Outh/Signin";
import MyDrawer from "../Sidebar/Drawer";
const NavigationBar = () => {
  
  const dispatch = useDispatch();

  // const handleSearchInputChange = (e) => {
  //   dispatch(setSearchTerm(e.target.value)); // Dispatch the action to update searchTerm
  // };


  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true); // Open the drawer
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false); // Close the drawer
  };



  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  // Load products from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle product click
 // Function to handle product click
const handleProductClick = (product) => {
  setSearchQuery("");  // Clear the search input value
  navigate(`/ProductGrid`, { state: { product } }); // Redirect to ProductGrid with product data
};

  const items = useSelector((state) => state.products.items);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state) => setOpen(state);

  const [show, setShow] = React.useState(false);
  const toggleDrawerSidebar = (state) => setShow(state);

  return (
    <>
      {/* Mobile Sidebar Drawer */}
      
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        className="mobile-sidebar"
      >
        <div className="mobile-sidebar-content">
          {/* Logo and Home Link */}
          <div className="d-flex align-items-center mb-3">
            <Link className="text-decoration-none d-flex flex-column align-items-center" to="/">
              <img className="" style={{ width: "100px", height: "120px" }} src={image} alt="Logo" />
              <span className="ms-2">WORLDWISETRADING</span>
            </Link>
          </div>
          <div>
            <ul className="navbar-na ms-auto d-flex align-items-center list-unstyled">
              <li className="nav-item mx-2">
                {/* <Link className="text-decoration-none" to="/Signup"> */}
                  <Icon onClick={handleDrawerOpen} className="text-black" icon={userIcon} width={30} />
                {/* </Link> */}
              </li>
              <li className="nav-item mx-2">
                <a href="#">
                  <Icon className="text-black" icon={heartIcon} width={30} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#">
                  <Icon className="text-black" icon={exchangeAltIcon} width={30} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="d-flex align-items-center">
                  <Badge className="mx-1" badgeContent={items.length} color="success">
                    <IconButton onClick={toggleDrawerSidebar} color="primary">
                      <Icon className="text-black" icon={shoppingCartIcon} width={30} />
                      <span className="ms-2 text-black">${totalPrice}</span>
                    </IconButton>
                    
                  </Badge>
               
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="categories text-center">
          <ul className="list-unstyled">
            <li><Link to="/HomeKitchen" className="text-decoration-none fw-bold">Home & Kitchen</Link></li>
            <li className="my-2"><Link to="/Toyandgames" className="text-decoration-none fw-bold">Toys & Games</Link></li>
            <li><Link to="/Babyproduct" className="text-decoration-none fw-bold">Baby Products</Link></li>
            <li className="my-2"><Link to="/Beautyproduct" className="text-decoration-none fw-bold">Beauty Products</Link></li>
            <li><Link to="/Petsuplince" className="text-decoration-none fw-bold">Pet Supplies</Link></li>
            <li className="my-2"><Link to="/Officeproducts" className="text-decoration-none fw-bold">Office Products</Link></li>
          </ul>
        </div>
        <div className="dropdown">
    <button className="btn btn-light dropdown-toggle ms-5" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
      Select Category
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdown-category">
  <li><Link className="dropdown-item" to="/HomeKitchen">Home & Kitchen</Link></li>
  <li><Link className="dropdown-item" to="/Toyandgames">Toys & Games</Link></li>
  <li><Link className="dropdown-item" to="/Babyproduct">Baby Products</Link></li>
  <li><Link className="dropdown-item" to="/Grocerygourmet">Grocery & Gourmet</Link></li>
  <li><Link className="dropdown-item" to="/ToolsImprovement">Tools & Improvement</Link></li>
  <li><Link className="dropdown-item" to="/Sportsandoutdoor">Sports and Outdoor</Link></li>
  {/* <li><Link className="dropdown-item" to="/Lawnpatioparden">Tools & Improvement</Link></li> */}
  <li><Link className="dropdown-item" to="/Supplements">Supplements</Link></li>
  <li><Link className="dropdown-item" to="/Officeproducts">Office Products</Link></li>
  <li><Link className="dropdown-item" to="/Petsuplince">Pet Supplies</Link></li>
</ul>
  </div>
      </Drawer>

      {/* Top Banner (Desktop and Mobile) */}
      <div className="bgcolor text-white text-center">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="text-center ps-4 pt-2">
              <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
            </div>
            <div className="menue d-none d-md-block">
              <ul className="d-flex list-unstyled pt-2">
                <Link className="text-decoration-none text-white" to="/ContactForm">
                  <li>Contact US</li>
                </Link>
                <Link className="text-decoration-none text-white" to="/AboutUs">
                  <li className="mx-3">About US</li>
                </Link>
                <Link className="text-decoration-none text-white" to="/ReturnPolicy">
                  <li>Return Policy</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <div className="d-flex">
            <button className="navbar-toggler" type="button" onClick={() => toggleDrawer(true)}>
              <span className="navbar-toggler-icon border-0"></span>



            </button>
{/*             
            <div className="d-flex d-sm-none search-category align-items-center ms-auto w-100 b border px-1">
  <input className="form-control me-2 w-100 ms-1 border-0" type="search" placeholder="Search for products" aria-label="Search" />
   <div className="dropdown">
    <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
      Select Category
    </button>
    <ul className="dropdown-menu w-25" aria-labelledby="dropdown-category">
      <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
      <li><a className="dropdown-item" href="#">Toys & Games</a></li>
      <li><a className="dropdown-item" href="#">Baby Products</a></li>
    </ul>
  </div> 
  <Icon className="border searchicon m-1 bg-primary text-white px-1" icon="bitcoin-icons:search-filled" />
</div> */}
<div className="container mt-3 position-relative inputsfield">
      {/* Search Input */}
      <input
        className="form-control w-100 border-1"
        type="search"
        placeholder="Search for products"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Search Results - Now Clickable */}
      {searchQuery && (
        <div className="search-results position-absolute bg-white border rounded mt-1 w-100 shadow-sm">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="d-flex align-items-center p-2 border-bottom"
                style={{ cursor: "pointer" }}
                onClick={() => handleProductClick(product)} // Navigate on click
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded me-2"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <span>{product.name}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-muted">No matching products</div>
          )}
        </div>
      )}
    </div>





            <Link className="text-decoration-none d-flex  align-items-center" to="/">
              <img style={{ width: "60px", height: "50px" }} src={image} alt="Logo" />
              <span className="me-1 fw-bold text-black">WWTL</span>
            </Link>
          </div>

          <div className="collapse navbar-collapse">
            {/* Desktop Search with Category Dropdown Inside Input */}
            <div className="d-none d-md-flex search-category align-items-center ms-aut w-75 ms-5 b border px-1">
              {/* <input className="form-control me-2 w-100 ms-1 border-0" type="search" placeholder="Search for products" aria-label="Search" /> */}
             
             
             
             
              <div className="container  position-relative  ">
      {/* Search Input */}
      <input   style={{ outline: "none", border: "none" }}
        className="form-contro w-100  border-0  mdscreens"
        type="search"
        placeholder="Search for products"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Search Results - Now Clickable */}
      {searchQuery && (
        <div className="search-results position-absolute bg-white border rounded mt-1 w-100 shadow-sm">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="d-flex align-items-center p-2 border-bottom"
                style={{ cursor: "pointer" }}
                onClick={() => handleProductClick(product)} // Navigate on click
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded me-2"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <span>{product.name}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-muted">No matching products</div>
          )}
        </div>
      )}
    </div>
             
             
             
             
             
             
              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdown-category">
  <li><Link className="dropdown-item" to="/HomeKitchen">Home & Kitchen</Link></li>
  <li><Link className="dropdown-item" to="/Toyandgames">Toys & Games</Link></li>
  <li><Link className="dropdown-item" to="/Babyproduct">Baby Products</Link></li>
  <li><Link className="dropdown-item" to="/Grocerygourmet">Grocery & Gourmet</Link></li>
  <li><Link className="dropdown-item" to="/ToolsImprovement">Tools & Improvement</Link></li>
  <li><Link className="dropdown-item" to="/Sportsandoutdoor">Sports and Outdoor</Link></li>
  <li><Link className="dropdown-item" to="/Lawnpatioparden">Tools & Improvement</Link></li>
  <li><Link className="dropdown-item" to="/Supplements">Supplements</Link></li>
  <li><Link className="dropdown-item" to="/Officeproducts">Office Products</Link></li>
  <li><Link className="dropdown-item" to="/Petsuplince">Pet Supplies</Link></li>
</ul>
              </div>
              <Icon height={35} className="border searchicon  bg-primary text-white " icon="bitcoin-icons:search-filled" />
            </div>

            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item mx-2">
                {/* <Link className="text-decoration-none" to="/Signup"> */}
                  <Icon onClick={handleDrawerOpen} className="text-black" icon={userIcon} width={20} />
                {/* </Link> */}
              </li>
              <li className="nav-item mx-2">
                <a href="/Favirate">
                  <Icon className="text-black" icon={heartIcon} width={20} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="/Compare">
                 <Icon className="text-black" icon={exchangeAltIcon} width={20} />
                </a>
              </li>
              <li className="nav-item bg-primary rounded-5 pe-2 w-100">
                <a href="#" className="d-flex align-items-center w-100">
                  <Badge className="" badgeContent={items.length} color="success">
                    <IconButton className="text-start w-100" onClick={toggleDrawerSidebar} color="primary">
                      <Icon className=" fs-2 bg-white rounded-5 text-black p-1" icon="ic:outline-shopping-bag" />
                    </IconButton>
                  </Badge>
                  <span className="ms-2 text-white">${totalPrice}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      <div className="d-flex justify-content-center align-items-center text-center">
  <ul className="list-unstyled d-flex justify-content-center align-items-center text-center d-none d-sm-flex">
    <li><Link to="/HomeKitchen" className="text-decoration-none fw-bold text-black">Home & Kitchen</Link></li>
    <li className="my-2 mx-3"><Link to="/Toyandgames" className="text-decoration-none fw-bold text-black">Toys & Games</Link></li>
    <li><Link to="/Babyproduct" className="text-decoration-none fw-bold text-black">Baby Products</Link></li>
    <li className="my-2 mx-3"><Link to="/Beautyproduct" className="text-decoration-none fw-bold text-black">Beauty Products</Link></li>
    <li><Link to="/Petsuplince" className="text-decoration-none fw-bold text-black">Pet Supplies</Link></li>
    <li className="my-2"><Link to="/Officeproducts" className="text-decoration-none fw-bold text-black mx-2">Office Products</Link></li>
  </ul>
</div>
< SigninDrawer isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}  />
      {/* Outlet for page content */}
      <MyDrawer show={show} toggleDrawerSidebar={toggleDrawerSidebar}  />  
      <Outlet />
    </>
  );
};

export default NavigationBar;
