import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Slice/Slice";


export const store = configureStore({
  reducer: {
    products: productReducer,
  
   
  },
});











