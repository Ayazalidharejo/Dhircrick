

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
import Catagory from "../Faltu/Catagory";


const Parentmainesection = () => {
  return (
    <>
    <div>
      {/* Swiper for medium and larger screens */}
      <div className="d-none d-md-block">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '500px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
                  <h1 className="fw-bold text-center heading">Discover The New Items!</h1>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-6">
                      <p className="mb- text-center fs-5 ps-5 mb- pt-4 para">
                        Discover quality items at <strong>N-YIYI 346</strong>, your go-to store for all needs.
                        <a href="#" className="link-light d-block text-center w-100 ps- mt-">
                        {/* info@nyiy346.com */}
                      </a>
                      </p>
                     
                    </div>
                    <div className="col-5 mt-5">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center btn1">
                        <h2 className="price fs-2 fw-bold ">6.99$</h2>
                        <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-">Shop Now</button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img style={{height:"500px",width:"650px"}} src={hero} alt="Special Offer" className=" product-image" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '500px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading">Special Deals Just For You!</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6">
                      <p className=" text-center fs-5 ps-5 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346</strong>.
                        <a href="#" className="link-light d-block text-center w-100 ps- mt-">
                        {/* info@nyiy346.com */}
                      </a>
                      </p>
                      
                    </div>
                    <div className="col-5 mt-3">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center">
                        <h2 className="price fs-2 fw-bold ps-">10.99$</h2>
                      <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-">Shop Now</button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img src={hero2} alt="Special Offer" className="img-fluid product-image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>







      {/* Swiper for small screens (below md) */}
      <div className="d-block d-md-none">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {/* Slide 1 for small screens */}
          {/* <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
               
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6">
                      <p className=" text-center  para ms-1 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346</strong>. <br />
                        info@nyiy346.com
                     
                      </p>
                     
                    </div>
                    <div className="col-6">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2  text-center mt-5">
                        <h2 className="price fs-6 fw-bold">10.99$</h2>
                        <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button> </Link>
                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!
                  
                  </h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-5">
                      <p className=" text-center  para ms-1 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346 <br />
                    
                        {/* info@nyiy346.com */}
                     
                        </strong>.
                        
                      </p>
                     
                    </div>
                    <div className="col-7 pe-5  ">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2   text-center">
                        <h2 className="price fs-6 fw-bold ps-2">6.99$</h2>
                        <Link className="d-flex w-100 align-items-center" to="/Kichenmaine">
  <button className="btn btn-dark w-75 py-2 text-center  shopbtn ms-4">
    Shop Now
  </button>
</Link>

                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 for small screens */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!
                  
                  </h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-5">
                      <p className=" text-center  para ms- ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346 <br />
                    
                        {/* info@nyiy346.com */}
                     
                        </strong>.
                        
                      </p>
                     
                    </div>
                    <div className="col-7 pe-5  ">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2   text-center">
                        <h2 className="price fs-6 fw-bold ps-2">6.99$</h2>
                        <Link className="d-flex w-100 align-items-center" to="/Kichenmaine">
  <button className="btn btn-dark w-75 py-2 text-center  shopbtn ms-4">
    Shop Now
  </button>
</Link>

                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <Fashioncards/>
    <ProductGrid/>
    <Simplecard/>
    <Catagory/>
    <KitchenItems/> <br />
    <Bestselproduct />
    <Todaytranding/>
    <FoodSection/>
    <Discountproduct/>
    <CustomerReviews/>
    <Footer/>
    </>
  );
};

export default Parentmainesection;
