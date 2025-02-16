import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import image from "../images/saven.jpg";
import "./Style.css"

function Bestselproduct() {
  return (
    <>
      <div className=' container rounded-2 py-2'>
       <div className='d-flex justify-content-end align-items-center'>
   {/* <img className='' style={{height:"180px"}} src={logo} alt="" /> */}
   <h1 className='text-center w-100'>BEST SELLERS</h1>
   
{/* <div>
  <span>KITCHEN ITEMS</span>
  <p>Discover a world of luxury and <br /> indulgence with Dhir Crick LLC premium <br /> selection of  kitchen essentials.</p>
</div> */}
       </div>
       <div className='emptydiv'></div>
       <hr />
         {/* Fixed the class name to 'bg-warning' */}
        <div>
          <Swiper
            pagination={true}       // Enable pagination
            modules={[Pagination, Autoplay]}  // Import Pagination and Autoplay modules
            className="mySwiper"
            slidesPerView={6}       // Show 6 images at once
            spaceBetween={10}       // Space between slides (optional)
            autoplay={{             // Enable autoplay
              delay: 2500,          // Delay between each slide (in milliseconds)
              disableOnInteraction: false,  // Don't stop autoplay on interaction
            }}
          >
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            <SwiperSlide className='mx-5 d-flex align-items-center'> <div className='bg-white text-center'><img  style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
           <span>Catogary</span> <br />
            <span>name product</span> <br />
            <span>Price $201</span>
            </div> </SwiperSlide>
            
          
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Bestselproduct;
