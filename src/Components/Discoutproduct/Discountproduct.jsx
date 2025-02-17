// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';

// import image from "../images/saven.jpg";
// import image2 from "../images/d.jpg";
// import image3 from "../images/than.png";
// import image4 from "../images/m.jpg";
// import "./Style.css";

// function Todaytranding() {
//   return (
//     <>
//       <div className='container rounded-2 py-2'>
//         <div className='d-flex justify-content-end align-items-center mt-5'>
//           <h1 className='text-center w-100'>DISCOUNTED PRODUCTS</h1>
//         </div>
//         <div className='emptydiv'></div>
//         <hr />
//         <div>
//           <Swiper
//             pagination={true}
//             modules={[Pagination, Autoplay]}
//             className="mySwiper"
//             slidesPerView={6}
//             spaceBetween={10}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//           >
//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Officeproducts" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-6%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Toyandgames" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image2} alt="Product 2" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-9%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Petsuplince" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image3} alt="Product 3" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-8%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Beautyproduct" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image4} alt="Product 4" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-8%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Babyproduct" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image} alt="Product 5" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-9%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Grocerygourmet" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image2} alt="Product 6" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-7%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/ToolsImprovement" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image3} alt="Product 7" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-8%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Sportsandoutdoor" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image4} alt="Product 8" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-6%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//             <SwiperSlide className='mx-5 d-flex align-items-center'>
//               <a href="/Lawnpatioparden" className="text-decoration-none">
//                 <div className='bg-white text-center position-relative'>
//                   <img style={{width:"200px",height:"200px"}} src={image} alt="Product 9" />
//                   <div className='text-start'>
//                     <span>Name product</span><br />
//                     <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
//                     <br />
//                     <span className='price'>Price $201</span>
//                     <br />
//                     <button className='w-100 btns border-0 text-white'>Add to cart</button>
//                   </div>
//                   <span className=' discout position-absolute top-0 start-0'>-8%</span>
//                 </div>
//               </a>
//             </SwiperSlide>

//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Todaytranding;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Box, Button, Typography } from "@mui/material";

import image from "../images/saven.jpg";
import image1 from "../images/f.jpg";
import image2 from "../images/d.jpg";
import image3 from "../images/s.jpg";
import "./Style.css";

import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/Slice";

const products = [
  {id:11, name: "Home & Kitchen", path: "/HomeKitchen", image: image1 ,price:100},
  {id:12, name: "Office Products", path: "/Officeproducts", image: image2 ,price:100 },
  {id:13, name: "Toys & Games", path: "/Toyandgames", image: image ,price:100},
  {id:14, name: "Pet Supplies", path: "/Petsuplince", image: image3 ,price:100},
  {id:15, name: "Beauty Products", path: "/Beautyproduct", image: image ,price:100},
  {id:16, name: "Baby Products", path: "/Babyproduct", image: image1 ,price:100},
  {id:17, name: "Grocery & Gourmet", path: "/Grocerygourmet", image: image2 ,price:100},
  {id:18, name: "Tools & Improvement", path: "/ToolsImprovement", image: image3 ,price:100 },
  {id:19, name: "Sports & Outdoor", path: "/Sportsandoutdoor", image: image1,price:100 },
];

function Discountproduct() {
  const dispatch = useDispatch();
  return (
    <Box className="container rounded-2 py-3">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" fontWeight="bold">
          DISCOUNTED PRODUCTS
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
                Price $201
              </Typography>
              <Button   onClick={() => dispatch(addProduct(product))} variant="contained" color="primary" fullWidth className="mt-2">
                Add to cart
              </Button>
              <span className=' discout position-absolute top-0 start-0'>-8%</span>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Discountproduct;
