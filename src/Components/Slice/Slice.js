import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';


const initialState = {
  name: 'products',
  cartToastMessage: '',
  items: [],

};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isExit = state.items.find((item) => item.id === action.payload.id);
console.log(action);

      if (isExit) {
        state.cartToastMessage = 'Product Already Added!';
          Swal.fire({
       title: 'Product Already Added!',
     
       icon: 'success',
       confirmButtonText: 'OK',
       confirmButtonColor: '#ec008c' 
     });
      } else {
    
        state.items.push({ 
          ...action.payload, 
          quantity: 1, 
        
        });
        state.cartToastMessage = 'Product added to cart successfully!';
        Swal.fire({
     title: 'Product added to cart successfully!',
   
     icon: 'success',
     confirmButtonText: 'OK',
     confirmButtonColor: '#ec008c' 
   });
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
