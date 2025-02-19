// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination, Autoplay } from 'swiper/modules';

// import image from "../images/saven.jpg";
// import logo from "../images/than.png";
// import "./Style.css";

// function Swipere() {
//   return (
//     <>
//       <div className='maine rounded-2 py-5 '>
//         <div className='container'>
//           <div className='d-flex justify-content-between container align-items-center px-5 mb-3'>
//             <img className='' style={{ height: "240px" }} src={logo} alt="" />
//             <div className='ms-5'>
//               <span className='texts '>KITCHEN ITEMS</span>
//               <p className='text-center text-white'>Discover a world of luxury and indulgence with Dhir Crick LLC <br /> premium selection of kitchen essentials.</p>
//             </div>
//           </div>

//           <div>
//             <Swiper
//               pagination={true}       // Enable pagination
//               modules={[Pagination, Autoplay]}  // Import Pagination and Autoplay modules
//               className="mySwiper"
//               slidesPerView={6}       // Show 6 images at once
//               spaceBetween={10}       // Space between slides (optional)
//               autoplay={{             // Enable autoplay
//                 delay: 2500,          // Delay between each slide (in milliseconds)
//                 disableOnInteraction: false,  // Don't stop autoplay on interaction
//               }}
//             >
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/HomeKitchen" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 1" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Officeproducts" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 2" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Toyandgames" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 3" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Petsuplince" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 4" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Beautyproduct" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 5" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Babyproduct" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 6" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Grocerygourmet" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 7" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/ToolsImprovement" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 8" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//               <SwiperSlide className='mx-5 d-flex align-items-center'>
//                 <a href="/Sportsandoutdoor" className='text-decoration-none'>
//                   <div className='bg-white text-center'>
//                     <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 9" />
//                     <span className='text-black'>name product</span>
//                     <br />
//                     <span className='text-black' style={{ opacity: 0.6 }}>Category</span>

//                     <br />
//                     <span className='text-primary fw-bold'>Price $201</span>
//                   </div>
//                 </a>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Swipere;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Box } from "@mui/material";

import image from "../images/saven.jpg";
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
            { name: "Home & Kitchen", path: "/HomeKitchen" },
            { name: "Office Products", path: "/Officeproducts" },
            { name: "Toys & Games", path: "/Toyandgames" },
            { name: "Pet Supplies", path: "/Petsuplince" },
            { name: "Beauty Products", path: "/Beautyproduct" },
            { name: "Baby Products", path: "/Babyproduct" },
            { name: "Grocery & Gourmet", path: "/Grocerygourmet" },
            { name: "Tools & Improvement", path: "/ToolsImprovement" },
            { name: "Sports & Outdoor", path: "/Sportsandoutdoor" },
          ].map((product, index) => (
            <SwiperSlide key={index}>
              <a href={product.path} className="text-decoration-none">
                <Box className="bg-white text-center p-2 shadow-sm rounded">
                  <img
                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    src={image}
                    alt={product.name}
                  />
                  <span className="text-black d-block fw-bold mt-2">{product.name}</span>
                  <span className="text-black d-block" style={{ opacity: 0.6 }}>
                    Category
                  </span>
                  <span className="text-primary fw-bold">Price $201</span>
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
