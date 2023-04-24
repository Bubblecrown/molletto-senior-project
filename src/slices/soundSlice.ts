import { createSlice } from "@reduxjs/toolkit";

// Create the initial state
const initialState = {
  isMuted: true,
};
// Create the slice of the state
const soundSlice = createSlice({
  // The name of the slice
  name: "audio",
  // The initial state of the slice
  initialState,
  // The reducers of the slice
  reducers: {
    setIsMuted: (state) => {
      state.isMuted = !state.isMuted;
    },
    
  },
});

// Export the actions of the slice
export const { setIsMuted } = soundSlice.actions;
// Export the reducer of the slicel
export const soundReducer = soundSlice.reducer;
