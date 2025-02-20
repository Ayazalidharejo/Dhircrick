import React from "react";
import one from "../images/yourname.png"; // Product image 1
import two from "../images/yourname.png"; // Product image 2
import imgbg from "../images/bgimg.jpg"; // Single background image
import "./Style.css";

const ProductShowcase = () => {
  return (
   <>
    <div
      className="mx-5 rounded"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row position-relative">
        {/* First Product */}
        <div className="col-12 col-md-6 ">
          <a href="/Supplements" className="text-decoration-none">
            <div
              className=""
              style={{
                backgroundColor: "#fff",
                cursor: "pointer",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="product-card position-absolute top-50 start-0 translate-middle-y" style={{ width: "53%", height: "100%" }}>
                <img
                  src={one}
                  alt="BOOTAA 29” LARGE DART BOARD"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </a>
        </div>

        {/* Second Product - Hidden on Small Screens */}
        <div className="col-12 col-md-6 d-none d-sm-block">
          <a href="/HomeKitchen" className="text-decoration-none">
            <div
              className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
              style={{ cursor: "pointer" }}
            >
              <div className="text-light ms-5">
                <h3 className="fw-bold">You Name It, We Have It</h3>
                <p className="pgtext">
                  Your go-to destination for a wide range of multi-niche <br /> products right here in the heart of Texas. We are more <br /> than just an online retailer.
                </p>

                <button className="mt-2 p-2 border-0 shopbtn">SHOP NOW</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
   



{/* for mobile phone  */}
<div
  className=" rounded mb-5"
  style={{
    backgroundImage: `url(${imgbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="row position-relative">
    {/* First Product */}
    <div className="col-12 col-md-6">
      <a href="/Supplements" className="text-decoration-none">
        <div
          className=""
          style={{
            backgroundColor: "#fff",
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="product-card position-absolute top-100 start-50 translate-middle" style={{ width: "80%", height: "100%" }}>
            <img
              src={one}
              alt="BOOTAA 29” LARGE DART BOARD"
              className="img-fluid tady"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </a>
    </div>

    {/* Second Product - Visible on Small Screens, Hidden on Medium and Large Screens */}
    <div className="col-12 col-md-6 d-sm-block d-md-none d-lg-none">
      <a href="/HomeKitchen" className="text-decoration-none">
        <div
          className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
          style={{ cursor: "pointer" }}
        >
          <div className="text-light ms-5">
            <h3 className="fw-bold">You Name It, We Have It</h3>
            <p className="pgtext">
              Your go-to destination for a wide range of multi-niche <br /> products right here in the heart of Texas. We are more <br /> than just an online retailer.
            </p>

            <button className="mt-2 p-2 border-0 shopbtn">SHOP NOW</button>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

   </>
  );
};

export default ProductShowcase;
