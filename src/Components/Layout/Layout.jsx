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
// import { Icon } from "@iconify/react";
import "./Layout.css";
// import MyDrawer from "../../Sidebar/Drawer";

const NavigationBar = () => {
  const items = useSelector((state) => state.products.items);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state) => {
    setOpen(state);
  };

  const [show, setShow] = React.useState(false);
  const toggleDrawere = (state) => {
    setShow(state);
  };

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
            <Link className="text-decoration-none" to="">
              <img className="border" style={{ width: "150px", height: "120px" }} src={image} alt="Dhir Crick" />
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
                    <IconButton onClick={toggleDrawere} color="primary">
                      <Icon className="text-black" icon={shoppingCartIcon} width={20} />
                    </IconButton>
                  </Badge>
                  <span className="ms-2 text-black">${totalPrice}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>

      {/* Top Banner (Desktop and Mobile) */}
      <div className="bg-primary text-white text-center ">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="text-center ps-4 pt-2">
              <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
            </div>
            <div className="menue d-none d-md-block">
              <ul className="d-flex list-unstyled pt-2">
                <Link className="text-decoration-none text-white" to="/Contact">
                  <li>Contact US</li>
                </Link>
                <Link className="text-decoration-none text-white" to="/About">
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="text-decoration-none" to="">
              <img style={{ width: "100px", height: "70px" }} src={image} alt="Logo" />
            </Link>
          </div>

          <div className="collapse navbar-collapse">
            {/* Desktop Search with Category Dropdown Inside Input */}
            <div className="d-none d-md-flex search-category align-items-center ms-aut w-100 b border px-1">
              <input className="form-control me-2 w-100 ms-1 border-0" type="search" placeholder="Search for products" aria-label="Search" />
              {/* <span className="border-left-only h-100"> vvv</span> */}

              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdown-category">
                  <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                  <li><a className="dropdown-item" href="#">Toys & Games</a></li>
                  <li><a className="dropdown-item" href="#">Baby Products</a></li>
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
                    <IconButton className="text-start w-100" onClick={toggleDrawere} color="primary">
                    <Icon className=" fs-2  bg-white rounded-5  text-black p-1 " icon="ic:outline-shopping-bag" />
                    </IconButton>
                  </Badge>
                  <span className="ms-2 text-white">${totalPrice}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Outlet for page content */}
      <Outlet />
    </>
  );
};

export default NavigationBar;
