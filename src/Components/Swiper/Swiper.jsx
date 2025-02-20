


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Box } from "@mui/material";

import image1 from "../images/Gaskit.jpg";
import image2 from "../images/mouse.jpg";
import image3 from "../images/toykids.jpg";
import image4 from "../images/d2.png";
import image5 from "../images/w6.jpg";
import image6 from "../images/b4.jpg";
import image7 from "../images/tamato.jpg";
import image8 from "../images/adjustbletool.jpg";
import logo from "../images/than.png";
import "./Style.css";

function Swipere() {
  return (
    <Box className="maine rounded-2 py-5">
      <Box className="container">
        <Grid container alignItems="center" justifyContent="space-between" spacing={2} className="mb-3 px-3">
          <Grid item xs={12} sm={4} md={3}>
            <img className="img-fluid" style={{ height: "240px" }} src={logo} alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <span className="texts d-flex text-center fs-6">KITCHEN ITEMS</span>
            <p className="text-center text-white">
              Discover a world of luxury and indulgence with WORLDWISE TRADINGLL
              <br />
              premium selection of kitchen essentials.
            </p>
          </Grid>
        </Grid>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile (1 item)
            480: { slidesPerView: 2, spaceBetween: 10 },  // Small screens (2 items)
            768: { slidesPerView: 3, spaceBetween: 15 },  // Medium screens (3 items)
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Large screens (4 items)
            1280: { slidesPerView: 5, spaceBetween: 25 }, // Extra-large screens (5 items)
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {[
            { name: "Home & Kitchen", path: "/HomeKitchen",image:image1 },
            { name: "Office Products", path: "/Officeproducts",image:image2 },
            { name: "Toys & Games", path: "/Toyandgames",image:image2 },
            { name: "Pet Supplies", path: "/Petsuplince" ,image:image3},
            { name: "Beauty Products", path: "/Beautyproduct" ,image:image4},
            { name: "Baby Products", path: "/Babyproduct" ,image:image5} ,
            { name: "Grocery & Gourmet", path: "/Grocerygourmet",image:image6 },
            { name: "Tools & Improvement", path: "/ToolsImprovement",image:image7 },
            { name: "Sports & Outdoor", path: "/Sportsandoutdoor",image:image8 },
          ].map((product, index) => (
            <SwiperSlide key={index}>
              <a href={product.path} className="text-decoration-none">
                <Box className="bg-white text-center p-2 shadow-sm rounded">
                  <img
                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    src={product.image}
                    alt={product.name}
                  />
                  <span className="text-black d-block fw-bold mt-2">{product.name}</span>
                  <span className="text-black d-block" style={{ opacity: 0.6 }}>
                    Category
                  </span>
                  <span className="bcolor fw-bold">Price $201</span>
                </Box>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Swipere;
