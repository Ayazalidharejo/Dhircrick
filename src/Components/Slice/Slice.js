import { createSlice } from '@reduxjs/toolkit';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const initialState = {
  name: 'products',
  cartToastMessage: '',
  items: [],

};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // addProduct: (state, action) => {
    //   const isExit = state.items.find((item) => item.id === action.payload.id);
    //   console.log(action);
    
    //   // Check if price is a string before converting
    //   let price = action.payload.price;
    
    //   if (typeof price === 'string') {
    //     price = parseFloat(price.replace('$', '')); // Convert to number if it's a string
    //   }
    
    //   if (isExit) {
    //     state.cartToastMessage = 'Product Already Added!';
    //     Swal.fire({
    //       title: 'Product Already Added!',
    //       icon: 'success',
    //       confirmButtonText: 'OK',
    //       confirmButtonColor: '#ec008c',
    //     });
    //   } else {
    //     // Add product to the cart with price as a number
    //     state.items.push({
    //       ...action.payload,
    //       price, // Store the converted price as a number (or original value if already a number)
    //       quantity: 1,
    //     });
    
    //     state.cartToastMessage = 'Product added to cart successfully!';
    //     Swal.fire({
    //       title: 'Product added to cart successfully!',
    //       icon: 'success',
    //       confirmButtonText: 'OK',
    //       confirmButtonColor: '#ec008c',
    //     });
    //   }
    // },

 

addProduct: (state, action) => {
  const isExit = state.items.find((item) => item.id === action.payload.id);
  console.log(action);

  // Check if price is a string before converting
  let price = action.payload.price;

  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', '')); // Convert to number if it's a string
  }

  if (isExit) {
    state.cartToastMessage = 'Product Already Added!';

    // Replace SweetAlert with Toastify for product already added
    Toastify({
      text: "Product Already Added!",
      duration: 3000,  // Duration in ms
      close: true,
      gravity: "top",  // Position of the toast: top or bottom
      position: "right",  // Position: left, center, right
      backgroundColor: "#ec008c",  // Set the background color
      stopOnFocus: true,  // Stops the toast from disappearing if focused
    }).showToast();
  } else {
    // Add product to the cart with price as a number
    state.items.push({
      ...action.payload,
      price, // Store the converted price as a number (or original value if already a number)
      quantity: 1,
    });

    state.cartToastMessage = 'Product added to cart successfully!';

    // Replace SweetAlert with Toastify for successful product addition
    Toastify({
      text: "Product added to cart successfully!",
      duration: 3000,  // Duration in ms
      close: true,
      gravity: "top",  // Position of the toast: top or bottom
      position: "right",  // Position: left, center, right
      backgroundColor: "#4caf50",  // Green color for success
      stopOnFocus: true,  // Stops the toast from disappearing if focused
    }).showToast();
  }
},

        

    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },

    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct } = productSlice.actions;

export default productSlice.reducer;
