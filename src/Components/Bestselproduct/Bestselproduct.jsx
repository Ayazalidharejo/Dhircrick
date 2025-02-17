import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/Slice";
import image4 from "../images/saven.jpg";
import image1 from "../images/f.jpg";
import image2 from "../images/d.jpg";
import image3 from "../images/s.jpg";
import "./Style.css";

const products = [
  {id:10, name: "Home & Kitchen", path: "/HomeKitchen", image: image1 ,price:120},
  {id:20, name: "Office Products", path: "/Officeproducts", image: image2 ,price:120},
  {id:21, name: "Toys & Games", path: "/Toyandgames", image: image4 ,price:120},
  {id:22, name: "Pet Supplies", path: "/Petsuplince", image: image3 ,price:120},
  {id:23, name: "Beauty Products", path: "/Beautyproduct", image: image4 ,price:120},
  {id:24, name: "Baby Products", path: "/Babyproduct", image: image1 ,price:120},
  {id:25, name: "Grocery & Gourmet", path: "/Grocerygourmet", image: image2 ,price:120},
  {id:26, name: "Tools & Improvement", path: "/ToolsImprovement", image: image3 ,price:120},
  {id:27, name: "Sports & Outdoor", path: "/Sportsandoutdoor", image: image1 ,price:120 },
];

function Bestselproduct() {
  const dispatch = useDispatch();
  return (
    <Box className="container rounded-2 py-3">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" fontWeight="bold">
            BEST SELLERS
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
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
              <Typography variant="body1" className="text-primary fw-bold">
              Price: ${product.price}
              </Typography>
              <Button onClick={() => dispatch(addProduct(product))} variant="contained" color="primary" fullWidth className="mt-2">
                Add to cart
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Bestselproduct;
