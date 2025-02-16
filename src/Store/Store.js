import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Slice/Slice";
import searchReducer from "../Components/Slice/Searchturms";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
   
  },
});











