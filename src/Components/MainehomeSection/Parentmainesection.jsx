

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Style.css"; // Assuming you are importing your custom styles
import hero from "../images/kk.png";
import hero2 from "../images/than.png";
import { Link } from "react-router-dom";
import Fashioncards from "../Fashioncard/Fashioncards";
import ProductGrid from "../Products/Products";
import Simplecard from "../Simplesection/Simplecard";

import KitchenItems from "../Swiper/Swiper";
import Bestselproduct from "../Bestselproduct/Bestselproduct";
import Todaytranding from "../Todaytrending/Todaytranding";
import FoodSection from "../FoodSection/FoodSection";
import Discountproduct from "../Discoutproduct/Discountproduct";
import CustomerReviews from "../../Custumerreview/Custumerreview";
import Footer from "../Footer/Footer";

import Herosection from "../../Herosection/Herosection";
import Map from "../Mapingsection/Map";
// import Navbar from "../Navbar/Navbar";


const Parentmainesection = () => {
  return (
    <>
    

   
    {/* <Navbar/> */}
    <Herosection/>
    <Fashioncards/>
    <ProductGrid/>
    <Simplecard/>
    {/* <Catagory/> */}
    <KitchenItems/> <br />
    <Bestselproduct />
    <Todaytranding/>
    <FoodSection/>
  
    <CustomerReviews/>
    <Map/>
    {/* <Footer/> */}
    </>
  );
};

export default Parentmainesection;
