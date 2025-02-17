// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Drawer, Button } from '@mui/material';
// import user from "../images/log.jpg"; // Import your image

// const SigninDrawer = (props) => {


//   const {isDrawerOpen,handleDrawerOpen,handleDrawerClose}=props
//   // States to hold form data
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userConfirmPassword, setUserConfirmPassword] = useState('');

//   // State for error messages
//   const [formError, setFormError] = useState('');

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     window.location.href = "/";
//     // Form validation
//     if (!userEmail || !userPassword || !userConfirmPassword) {
//       setFormError('All fields are required');
//       return;
//     }

//     if (!validateEmail(userEmail)) {
//       setFormError('Please enter a valid email');
//       return;
//     }

//     if (userPassword !== userConfirmPassword) {
//       setFormError('Passwords do not match');
//       return;
//     }

//     // Clear any previous error
//     setFormError('');

//     // Create user data object
//     const userData = {
//       email: userEmail,
//       password: userPassword,
//     };

//     // Store data in localStorage
//     localStorage.setItem('logindata', JSON.stringify(userData));

//     // Clear form after successful submission
//     setUserEmail('');
//     setUserPassword('');
//     setUserConfirmPassword('');

//     // Optionally, you can redirect or show a success message
//     alert('Signup successful!');
//   };

//   // Validate email using a simple regex pattern
//   const validateEmail = (email) => {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return re.test(email);
//   };

//   return (
//     <div>
//       {/* Button to open the drawer */}
//       <Button onClick={handleDrawerOpen}>Open Signin</Button>

//       {/* Drawer component from MUI */}
//       <Drawer
//         anchor="right" // Open from the right side
//         open={isDrawerOpen}
//         onClose={handleDrawerClose}
//       >
//         <div className="container py-5">
//           <div className="row align-items-center">
//             {/* Image Section - 6 columns */}
//             <div className="col-md-6">
//               <img
//                 src={user} // Replace with your image URL
//                 alt="Signup illustration"
//                 className="img-fluid w-100"
//               />
//             </div>
//             {/* Form Section - 6 columns */}
//             <div className="col-md-6">
//               <h2 className="text-center mb-4">Login</h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={userEmail}
//                     onChange={(e) => setUserEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     value={userPassword}
//                     onChange={(e) => setUserPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="confirmPassword"
//                     value={userConfirmPassword}
//                     onChange={(e) => setUserConfirmPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {formError && <div className="alert alert-danger">{formError}</div>}

//                 <button type="submit" className="btn btn-primary text-white w-100">Submit</button>
//               </form>
//               <div className="d-flex justify-content-center">
//                 <span className="mt-2 text-center">
//                   Don't have an account?{' '}
//                   <Link to="/Signup">Signup here</Link>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default SigninDrawer;




import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

export default function TemporaryDrawer(props) {
  // State for drawer visibility
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } = props;

  // Form state
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userConfirmPassword, setUserConfirmPassword] = React.useState('');
  const [formError, setFormError] = React.useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!userEmail || !userPassword || !userConfirmPassword) {
      setFormError('All fields are required');
      return;
    }

    if (!validateEmail(userEmail)) {
      setFormError('Please enter a valid email');
      return;
    }

    if (userPassword !== userConfirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    // Clear any previous error
    setFormError('');

    // Create user data object
    const userData = {
      email: userEmail,
      password: userPassword,
    };

    // Store data in localStorage
    localStorage.setItem('logindata', JSON.stringify(userData));

    // Clear form after successful submission
    setUserEmail('');
    setUserPassword('');
    setUserConfirmPassword('');

    // Optionally, you can redirect or show a success message
    alert('Signup successful!');
  };

  // Validate email using a simple regex pattern
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // For medium and larger screens
  const anchor = isMdUp ? 'right' : 'left'; // Set the drawer anchor based on screen size

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerClose}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          {/* <div className="col-md-6">
            <img
              src="your-image-url" // Replace with your image URL
              alt="Signup illustration"
              className="img-fluid w-100"
            />
          </div> */}
          {/* Form Section */}
          <div className="col-md-12">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={userConfirmPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {formError && <div className="alert alert-danger">{formError}</div>}

              <button type="submit" className="btn btn-primary text-white w-100">Submit</button>
            </form>
            <div className="d-flex justify-content-center">
              <span className="mt-2 text-center">
                Don't have an account?{' '}
                <Link to="/Signup">Signup here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {/* Button to open the drawer */}
      {/* <Button onClick={handleDrawerOpen}>Open Signin</Button> */}

      {/* Drawer component from MUI */}
      <Drawer
        anchor={anchor} // Open from the right on larger screens, left on smaller screens
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
