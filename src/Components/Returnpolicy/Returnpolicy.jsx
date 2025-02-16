import React from "react";
import Footer from "../Footer/Footer";
import "./Style.css"



const ReturnPolicy = () => {
  return (
    <>
    
   
    <div className="container-fluid p-0">
      <div className="maine text-white text-center py-5">
        <h1>Return Policy</h1>
        <p>HOME / RETURN POLICY</p>
      </div>
      <div className="container py-5">
        <p>
          At Dhir Crick LLC, we strive to ensure your satisfaction with every purchase. If you are not completely satisfied, we offer a straightforward return process.
        </p>
        <h2>Return Eligibility</h2>
        <ul>
          <li>Items must be returned within 30 days of delivery.</li>
          <li>Items must be in their original condition, unused, and in the original packaging.</li>
          <li>Certain items, such as perishable goods, personalized items, and final sale items, may not be eligible for return.</li>
        </ul>
        <h2>How to Return an Item</h2>
        <ol>
          <li>Contact our customer service team at <a href="mailto:mr bean@gmail.com">info@dhircrickllc.com</a> to initiate a return.</li>
          <li>Include your order number, the item(s) you wish to return, and the reason for the return.</li>
          <li>We will provide you with a return authorization and instructions on how to send the item back to us.</li>
        </ol>
        <h2>Refunds</h2>
        <ul>
          <li>Once we receive and inspect the returned item, we will process your refund within 7-10 business days.</li>
          <li>Refunds will be issued to the original payment method.</li>
          <li>Shipping charges are non-refundable, except in cases where the return is due to our error or a defective product.</li>
        </ul>
        <h2>Exchanges</h2>
        <p>If you need to exchange an item, please follow the return process and place a new order for the replacement item.</p>
        <h2>Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, please contact us immediately at <a href="mailto:info@dhircrickllc.com">info@dhircrickllc.com</a>. We will arrange for a replacement or refund.
        </p>
      </div>
    </div>
   < Footer/>
    </>
  );
};

export default ReturnPolicy;
