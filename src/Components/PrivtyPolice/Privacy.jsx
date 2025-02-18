import React from "react";
import Footer from "../Footer/Footer";
import "./Style.css"



const Privacy = () => {
  return (
    <>
    
   
   
    <div className="container-fluid p-0">
      {/* Header Section */}
      <div className="maine text-white text-center py-5">
        <h1>Privacy Policy</h1>
        <p>HOME / Privacy Policy</p>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <p>
              Welcome to <strong>Dhir Crick LLC</strong>, your trusted destination for a diverse range of high-quality products. Located in Baytown, Texas, Dhir Crick LLC is more than just a store; it's a community hub where customer satisfaction meets exceptional value.
            </p>
            <p>
              We specialize in offering a wide variety of products across multiple niches to cater to the diverse needs of our customers. From home essentials and kitchenware to tech gadgets and lifestyle accessories, we have something for everyone.
            </p>
            <p>
              At Dhir Crick LLC, our mission is to provide an unparalleled shopping experience by delivering top-notch products and exceptional customer service. We believe in building lasting relationships with our customers by understanding their needs and exceeding their expectations.
            </p>
            <p>
              Our team is committed to sourcing the best products from trusted suppliers, ensuring that every item in our store meets our stringent quality standards. We constantly update our inventory to bring you the latest trends and innovations.
            </p>
            <p>
              Thank you for choosing Dhir Crick LLC. We look forward to serving you and making your shopping experience delightful and rewarding.
            </p>
            <p>
              For inquiries or assistance, feel free to contact us at
              <a href="mailto:Pyxis.info@gmail.com"> Pyxis.info@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    < Footer/>
    </>
  );
};

export default Privacy;