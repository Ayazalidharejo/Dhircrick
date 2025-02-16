import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import image from "../images/saven.jpg";
import image1 from "../images/f.jpg";
import image2 from "../images/d.jpg";
import image3 from "../images/s.jpg";
import "./Style.css"

function Bestselproduct() {
  return (
    <>
      <div className='container rounded-2 py-3'>
        <div className='d-flex justify-content-end align-items-center'>
          <h1 className='text-center w-100'>BEST SELLERS</h1>
        </div>
        <div className='emptydiv'></div>
        <hr />
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
            {/* Slide 1 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/HomeKitchen" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image1} alt="Product 1" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Officeproducts" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image2} alt="Product 2" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Toyandgames" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 3" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Petsuplince" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image3} alt="Product 4" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Beautyproduct" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image} alt="Product 5" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Babyproduct" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image1} alt="Product 6" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 7 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Grocerygourmet" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image2} alt="Product 7" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 8 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/ToolsImprovement" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image3} alt="Product 8" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            {/* Slide 9 */}
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Sportsandoutdoor" className='text-decoration-none'>
                <div className='bg-white text-center'>
                  <img style={{ width: "200px", height: "200px" }} src={image1} alt="Product 9" />
                  <div className='text-start'>
                    <span className='text-black'>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span><br />
                    <span className='price'>Price $201</span><br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                </div>
              </a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Bestselproduct;
