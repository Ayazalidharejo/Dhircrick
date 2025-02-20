import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Box, Button, Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/Slice";

import image from "../images/saven.jpg";
import image1 from "../images/f.jpg";
import image2 from "../images/d.jpg";
import image3 from "../images/s.jpg";
import "./Style.css";

const products = [
  {id:1, name: "Home & Kitchen", path: "/HomeKitchen", image: image1 ,price:180 },
  {id:2, name: "Office Products", path: "/Officeproducts", image: image2 ,price:140 },
  {id:3, name: "Toys & Games", path: "/Toyandgames", image: image ,price:150 },
  {id:4, name: "Pet Supplies", path: "/Petsuplince", image: image3 ,price:110 },
  {id:5, name: "Beauty Products", path: "/Beautyproduct", image: image ,price:201 },
  {id:6, name: "Baby Products", path: "/Babyproduct", image: image1 ,price:220 },
  {id:7, name: "Grocery & Gourmet", path: "/Grocerygourmet", image: image2 ,price:130},
  {id:8, name: "Tools & Improvement", path: "/ToolsImprovement", image: image3 ,price:190 },
  {id:9, name: "Sports & Outdoor", path: "/Sportsandoutdoor", image: image1 ,price:170},
];

function Todaytranding() {
    const dispatch = useDispatch();
  return (
    <Box className="container rounded-2 py-3">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" fontWeight="bold">
          TODAY'S TRENDING
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 25 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Box className="bg-white text-center p-2 shadow-sm rounded">
              <img
                style={{ width: "100%", height: "auto", objectFit: "cover",minHeight:"200px",maxHeight:"200px" }}
                src={product.image}
                alt={product.name}
              />
              <Typography variant="subtitle1" className="text-black fw-bold mt-2">
                {product.name}
              </Typography>
              <Typography variant="body2" className="text-black" style={{ opacity: 0.6 }}>
                Category
              </Typography>
              <Typography variant="body1" className="bcolor fw-bold">
                Price :${product.price}
              </Typography>
              <Button onClick={() => dispatch(addProduct(product))}  variant="contained"  fullWidth className="mt-2 btn-color">
                Add to cart
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Todaytranding;
