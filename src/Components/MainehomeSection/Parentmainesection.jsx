

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Style.css";

import { Link } from "react-router-dom";
import Fashioncards from "../Fashioncard/Fashioncards";
import ProductGrid from "../Products/Products";
import Simplecard from "../Simplesection/Simplecard";

import KitchenItems from "../Swiper/Swiper";
import Bestselproduct from "../Bestselproduct/Bestselproduct";
import Todaytranding from "../Todaytrending/Todaytranding";
import FoodSection from "../FoodSection/FoodSection";

import CustomerReviews from "../../Custumerreview/Custumerreview";


import Herosection from "../../Herosection/Herosection";
import Map from "../Mapingsection/Map";



const Parentmainesection = () => {
  return (
    <>
    

   

    <Herosection/>
    <Fashioncards/>
    <ProductGrid/>
    <Simplecard/>
   
    <KitchenItems/> <br />
    <Bestselproduct />
    <Todaytranding/>
    <FoodSection/>
  
    <CustomerReviews/>
    <Map/>

    </>
  );
};

export default Parentmainesection;
