import React from "react";
import { Icon } from "@iconify/react";
import userIcon from '@iconify-icons/fa-solid/user';
import heartIcon from '@iconify-icons/fa-solid/heart';
import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';
import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';
import { Link, Outlet } from "react-router-dom";
import image from "../images/logo.png";
import { Badge, Drawer, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import "./Layout.css";


import { useDispatch } from "react-redux";
import { setSearchTerm } from "../Slice/Searchturms";
const NavigationBar = () => {
  
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); // Dispatch the action to update searchTerm
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
            <Link className="text-decoration-none" to="/">
            /  <img className="border" style={{ width: "150px", height: "120px" }} src={image} alt="Logo" />
            </Link>
          </div>
          <div>
            <ul className="navbar-na ms-auto d-flex align-items-center list-unstyled">
              <li className="nav-item mx-2">
                <Link className="text-decoration-none" to="/Signup">
                  <Icon className="text-black" icon={userIcon} width={20} />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a href="#">
                  <Icon className="text-black" icon={heartIcon} width={20} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#">
                  <Icon className="text-black" icon={exchangeAltIcon} width={20} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="d-flex align-items-center">
                  <Badge className="mx-1" badgeContent={items.length} color="success">
                    <IconButton onClick={toggleDrawerSidebar} color="primary">
                      <Icon className="text-black" icon={shoppingCartIcon} width={20} />
                    </IconButton>
                  </Badge>
                  <span className="ms-2 text-black">${totalPrice}</span>
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
            
            <div className="d-flex d-sm-none search-category align-items-center ms-auto w-100 b border px-1">
  <input className="form-control me-2 w-100 ms-1 border-0" type="search" placeholder="Search for products" aria-label="Search" />
  {/* <div className="dropdown">
    <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
      Select Category
    </button>
    <ul className="dropdown-menu w-25" aria-labelledby="dropdown-category">
      <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
      <li><a className="dropdown-item" href="#">Toys & Games</a></li>
      <li><a className="dropdown-item" href="#">Baby Products</a></li>
    </ul>
  </div> */}
  <Icon className="border searchicon m-1 bg-primary text-white px-1" icon="bitcoin-icons:search-filled" />
</div>

            <Link className="text-decoration-none" to="/">
              <img style={{ width: "100px", height: "70px" }} src={image} alt="Logo" />
            </Link>
          </div>

          <div className="collapse navbar-collapse">
            {/* Desktop Search with Category Dropdown Inside Input */}
            <div className="d-none d-md-flex search-category align-items-center ms-aut w-100 b border px-1">
              <input className="form-control me-2 w-100 ms-1 border-0" type="search" placeholder="Search for products" aria-label="Search" />
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
              <Icon className="border searchicon m-1 bg-primary text-white px-1" icon="bitcoin-icons:search-filled" />
            </div>

            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item mx-2">
                <Link className="text-decoration-none" to="/Signup">
                  <Icon className="text-black" icon={userIcon} width={20} />
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a href="#">
                  <Icon className="text-black" icon={heartIcon} width={20} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#">
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

      {/* Outlet for page content */}
      <Outlet />
    </>
  );
};

export default NavigationBar;
