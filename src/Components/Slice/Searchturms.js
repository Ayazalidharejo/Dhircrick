// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", // Initial state for search term
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Update the searchTerm in state
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
