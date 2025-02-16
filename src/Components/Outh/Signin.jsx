import React, { useState } from 'react';
import user from "../images/log.jpg"
import { Link } from 'react-router-dom';

const Signin = () => {
  const handleRedirect = () => {
    window.location.href = "/Signup"; // Redirect to the /home page
  };
  // State to hold form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for error messages
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
window.location.href="/"
    // Form validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear any previous error
    setError('');

    // Create user data object
    const userData = {
      email,
      password,
    };

    // Store data in localStorage
    localStorage.setItem('logindata', JSON.stringify(userData));

    // Clear form after successful submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Optionally, you can redirect or show a success message
    alert('Signup successful!');
  };

  // Validate email using a simple regex pattern
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
          {/* Image Section - 6 columns */}
          <div className="col-md-6">
          <img
            src={user}  // Replace with your image URL
            alt="Signup illustration"
            className="img-fluid w-100"
          />
        </div>
        {/* Form Section - 6 columns */}
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-primary text-white w-100">Submit</button>
          </form>
          <div className="d-flex justify-content-center">
      <span className="mt-2 text-center">
        Register have an account? 
        <Link to="/Signup">
        Signup here
      </Link>
        {/* <a href="/Signup"> dvvdd</a> */}
      </span>
      {/* <button onClick={handleRedirect}>Login here</button> */}
    </div>
        </div>

      
      </div>
    </div>
  );
};

export default Signin;
