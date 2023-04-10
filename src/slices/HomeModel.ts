import { createSlice } from "@reduxjs/toolkit";

// Create the initial state
const initialState = {
  positionY: 0,
  positionY_circle:0
};
// Create the slice of the state
const modelSlice = createSlice({
  // The name of the slice
  name: "positionModel",
  // The initial state of the slice
  initialState,
  // The reducers of the slice
  reducers: {
    setPosition: (state, action) => {
      const { position_plane } = action.payload;
      state.positionY = position_plane;
    },
    setCircleClicked: (state, action) => {
      const { position_circle } = action.payload;
      state.positionY_circle = position_circle;
    },
  },
});

// Export the actions of the slice
export const { setPosition, setCircleClicked } = modelSlice.actions;
// Export the reducer of the slicel
export const modelReducer = modelSlice.reducer;
