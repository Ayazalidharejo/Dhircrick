import React, { useEffect, useState } from "react";

import userIcon from '@iconify-icons/fa-solid/user';
import heartIcon from '@iconify-icons/fa-solid/heart';
import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';
import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';
import { Link, Outlet, useNavigate } from "react-router-dom";
import image from "../images/logo3.png";
import { Badge, Drawer, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import "./Layout.css";


import { useDispatch } from "react-redux";

import SigninDrawer from "../Outh/Signin";
import MyDrawer from "../Sidebar/Drawer";
import { Icon } from "@iconify/react";
import Footer from "../Footer/Footer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const NavigationBar = () => {
  
  const dispatch = useDispatch();





  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        className="mobile-sidebar bg-btncolor"
      >
        <div className="mobile-sidebar-content">
          {/* Logo and Home Link */}
          <div className="d-flex align-items-center mb-3">
            <Link className="text-decoration-none d-flex flex-column align-items-center" to="/">
              <img className="ms-2" style={{ width: "100px", height: "120px" }} src={image} alt="Logo" />
             
            </Link>

          </div>
          <div>
            <ul className="navbar-na ms-auto d-flex align-items-center list-unstyled">
              <li className="nav-item mx-2">
              
                  <Icon onClick={handleDrawerOpen} className="text-black" icon={userIcon} width={30} />
             
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
 
      </Drawer>

      {/* Top Banner (Desktop and Mobile) */}
      <div className="bgcolor text-white text-center">
        <div className="container">
          <div className="d-flex justify-content-center py-1">
            <div className="text-center ps-4 pt-2">
              <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
            </div>
          
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <button className="navbar-toggler" type="button" onClick={() => toggleDrawer(true)}>
              <span className="navbar-toggler-icon border-0"></span>



            </button>
            






            <Link className="text-decoration-none d-flex linktag align-items-center" to="/">
              <img style={{ width: "60px", height: "50px" }} src={image} alt="Logo" />
           
            </Link>


            <ShoppingCartIcon onClick={toggleDrawerSidebar}  className="iconcart bcolor d-md-none" />
          
          </div>
          <div className="container mt-3 position-relative inputsfield my-1">

  <input
    className="form-control w-100 border-1"
    type="search"
    placeholder="Search for products"
    aria-label="Search"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />


  {searchQuery && (
    <div className="search-results position-absolute bg-white border rounded mt-1 w-100 shadow-sm">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div
            key={index}
            className="d-flex align-items-center p-2 border-bottom"
            style={{ cursor: "pointer" }}
            onClick={() => handleProductClick(product)} 
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
  <SearchIcon className="position-absolute top-50 end-0 translate-middle-y me-4"/>
</div>
          <div className="collapse navbar-collapse">
          
            <div className="d-none d-md-flex search-category align-items-center ms-aut w-100 ms- b border px-1 rounded">
             
             
             
             
             
              <div className="container  position-relative   ">
      {/* Search Input */}
      <input   style={{ outline: "none", border: "none" }}
        className="form-contro w-100  border-0 py-2   mdscreens"
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
                onClick={() => handleProductClick(product)} 
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
             
             
             
             
             
             

              
              <Icon height={35} className=" searchicon  b text-black " icon="bitcoin-icons:search-filled" />
            
            </div>

            <ul className="navbar-nav ms-auto d-flex align-items-center">
            <div className="d-flex  maineheaderinputdiv list-unstyled ">
<Link to="/Shop">  <button className=" w-btn border-0 bg-transparent">Shop </button> </Link>
  <Link to="/AboutUs"> <button className=" border-0 bg-transparent">About US </button> </Link>
<Link to="/ContactForm">   <button className=" border-0 bg-transparent">Contact US  </button> </Link>

</div>
              <li className="nav-item mx-2">
              
                <Icon className="fs-4" onClick={handleDrawerOpen} icon="lucide:user-round" />
               
              </li>
            
              
              <li className="nav-item mx-2">
                <a href="/">
                <Icon className="fs-2 text-black" icon="fluent:search-20-regular" />

                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="/Favirate">
              
                 <Icon className="fs-3 text-black" icon="material-symbols-light:favorite-outline-rounded" />
                </a>
              </li>
            
              <li className="nav-item  rounded-5 pe-2 w-2">
                <a href="#" className="d-flex align-items-center text-decoration-none ">
                  <Badge
                   sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#7e0926",
                      color: "white", 
                    },
                  }}
                  
                  
                  className="" badgeContent={items.length} >
                    <IconButton className="text-start w-100" onClick={toggleDrawerSidebar} color="primary">
                    <Icon className="fs-4 text-black" icon="icon-park-outline:shopping" />
                     
                    </IconButton>
                  </Badge>
                  <span className="ms-2 text-black">${totalPrice}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      <div className="d-flex justify-content-center align-items-center text-center">
  <ul className="list-unstyled d-flex justify-content-center align-items-center text-center d-none d-sm-flex liste">
    <li><Link to="/HomeKitchen" className="text-decoration-none fw-bold text-black fs-6">Home & Kitchen</Link></li>
    <li className="my-2 mx-3"><Link to="/Toyandgames" className="text-decoration-none fw-bold text-black fs-6">Toys & Games</Link></li>
    <li><Link to="/Babyproduct" className="text-decoration-none fw-bold text-black fs-6">Baby Products</Link></li>
    <li className="my-2 mx-3"><Link to="/Beautyproduct" className="text-decoration-none fw-bold text-black fs-6">Beauty Products</Link></li>
    <li><Link to="/Petsuplince" className="text-decoration-none fw-bold text-black fs-6">Pet Supplies</Link></li>
    <li className="my-2"><Link to="/Officeproducts" className="text-decoration-none fw-bold text-black mx-2 fs-6">Office Products</Link></li>
  </ul>
</div>
< SigninDrawer isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}  />
    
      <MyDrawer show={show} toggleDrawerSidebar={toggleDrawerSidebar}  />  
      <Outlet />
      <Footer/>
    </>
  );
};

export default NavigationBar;
