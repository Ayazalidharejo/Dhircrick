import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import image from "../images/saven.jpg";
import image2 from "../images/d.jpg";
import image3 from "../images/than.png";
import image4 from "../images/m.jpg";
import "./Style.css";

function Todaytranding() {
  return (
    <>
      <div className='container rounded-2 py-2'>
        <div className='d-flex justify-content-end align-items-center mt-5'>
          <h1 className='text-center w-100'>DISCOUNTED PRODUCTS</h1>
        </div>
        <div className='emptydiv'></div>
        <hr />
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Officeproducts" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"250px",height:"200px"}} src={image} alt="Product 1" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-6%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Toyandgames" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image2} alt="Product 2" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-9%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Petsuplince" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image3} alt="Product 3" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-8%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Beautyproduct" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image4} alt="Product 4" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-8%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Babyproduct" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image} alt="Product 5" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-9%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Grocerygourmet" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image2} alt="Product 6" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-7%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/ToolsImprovement" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image3} alt="Product 7" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-8%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Sportsandoutdoor" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image4} alt="Product 8" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-6%</span>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className='mx-5 d-flex align-items-center'>
              <a href="/Lawnpatioparden" className="text-decoration-none">
                <div className='bg-white text-center position-relative'>
                  <img style={{width:"200px",height:"200px"}} src={image} alt="Product 9" />
                  <div className='text-start'>
                    <span>Name product</span><br />
                    <span className='text-black' style={{ opacity: 0.5 }}>Category</span>
                    <br />
                    <span className='price'>Price $201</span>
                    <br />
                    <button className='w-100 btns border-0 text-white'>Add to cart</button>
                  </div>
                  <span className=' discout position-absolute top-0 start-0'>-8%</span>
                </div>
              </a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Todaytranding;
