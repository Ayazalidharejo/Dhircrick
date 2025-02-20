import React from "react";
import Footer from "../Footer/Footer";
 import "./Style.css"
const ContactForm = () => {
  return (
    <>
      {/* Header Section */}
      <div className="maine text-white text-center py-5">
        <h1>Contact Us</h1>
        <p>HOME / Contact US</p>
      </div>

      {/* Contact Form Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us For Any Questions</h2>
        <form>
          {/* Row for Name and Email */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="formName">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formName"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="formEmail">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="formEmail"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Row for Phone and Company */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="formPhone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="formPhone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="formCompany">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="formCompany"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="form-group mb-3">
            <label htmlFor="formMessage">Your Message</label>
            <textarea
              className="form-control"
              id="formMessage"
              rows="4"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn maine btn-color my-3 text-white fw-bold w-100">
            Ask a Question
          </button>
        </form>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ContactForm;
