import React, { useState } from "react";

import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Checkout = () => {
    const items = useSelector((state) => state.products.items);
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "United States (US)",
    street: "",
    city: "",
    state: "California",
    zip: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    checkIfFormIsFilled(updatedFormData);
  };

  const checkIfFormIsFilled = (data) => {
    const allFieldsFilled = Object.values(data).every((field) => field.trim() !== "");
    setIsFormFilled(allFieldsFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormFilled) return;

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      country: "United States (US)",
      street: "",
      city: "",
      state: "California",
      zip: "",
      phone: "",
      email: "",
      notes: ""
    });
    setIsFormFilled(false);
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 3000);
  };

  return (
    <>
    <div className="container mt-4">
      {orderSuccess && <div className="alert alert-success">Order Successfully Completed!</div>}
      <div className="row">
        <div className="col-md-7 mb-4">
          <h4>Billing Details</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First name *</label>
                <input type="text" required name="firstName" className="form-control" value={formData.firstName} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Last name *</label>
                <input type="text" name="lastName" required className="form-control" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="mb-3">
              <label>Company name (optional)</label>
              <input type="text" name="company" required className="form-control" value={formData.company} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label>Country / Region *</label>
              <select name="country" red className="form-select" value={formData.country} onChange={handleInputChange}>
                <option>United States (US)</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Street address *</label>
              <input type="text" required name="street" className="form-control" placeholder="House number and street name" value={formData.street} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label>Town / City *</label>
              <input type="text" required name="city" className="form-control" value={formData.city} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label>State *</label>
              <select name="state"  className="form-select" value={formData.state} onChange={handleInputChange}>
                <option>California</option>
              </select>
            </div>
            <div className="mb-3">
              <label>ZIP Code *</label>
              <input type="text" name="zip" required className="form-control" value={formData.zip} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label>Phone *</label>
              <input type="text" name="phone" required className="form-control" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label>Email address *</label>
              <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label>Order notes (optional)</label>
              <textarea name="notes" className="form-control" required rows="6" placeholder="Notes about your order, e.g. special notes for delivery." value={formData.notes} onChange={handleInputChange}></textarea>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Your Order</h5>
              <table className="table borderless">
                <tbody>
                  <tr>
                    <td>Multipurpose Baby Ointment</td>
                    <td className="text-end">$00.00</td>
                  </tr>
                  <tr>
                    <td>Heavy Duty Kitchen Scissors</td>
                    <td className="text-end">$00.00</td>
                  </tr>
                  <tr className="fw-bold">
                    <td>Subtotal</td>
                    <td className="text-end">$00.00</td>
                  </tr>
                  <tr className="fw-bold">
             
                    <td>Total</td>
                    <td className="text-end">${totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <div className="alert alert-warning text-center">
                Sorry, it seems that there are no available payment methods. <br />
                Please contact us for assistance.
              </div>
              <button className="btn btn-color text-white text-white fw-bold w-100" onClick={handleSubmit} disabled={!isFormFilled}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    
    </>
  );
};

export default Checkout;