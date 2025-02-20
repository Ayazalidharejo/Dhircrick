import React, { useState } from 'react';
import user from "../images/log.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // const navigate = useNavigate();
  // State to hold form data
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for error messages
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();
    // navigate('/login');
    // Form validation
    window.location.href="/Login"
    if (!firstName || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Clear any previous error
    setError('');

    // Create user data object
    const userData = {
      firstName,
      email,
      password,
    };

    // Store data in localStorage
    localStorage.setItem('signupdata', JSON.stringify(userData));

    // Clear form after successful submission
    setFirstName('');
    setEmail('');
    setPassword('');

    // Optionally, you can redirect or show a success message
    alert('Signup successful!');
   
  };

  // Validate email using a simple regex pattern
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Image Section - 6 columns */}
        <div className="col-md-6">
          <img
            src={user}  // Replace with your image URL
            alt="Login illustration"
            className="img-fluid w-100"
          />
        </div>
        {/* Form Section - 6 columns */}
        <div className="col-md-6">
          <h2 className="text-center mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn-color text-white w-100">Submit</button>
          </form>
          <div className="d-flex justify-content-center">
      <span className="mt-2 text-center">
        Already have an account? 
        <Link to="/Signin">Login here</Link>
        {/* <a href="Login"> Login here</a> */}
      </span>
    </div>
        </div>

      </div>    </div>
  );
};

export default Signup;
