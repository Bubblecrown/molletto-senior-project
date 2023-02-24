import { createSlice } from "@reduxjs/toolkit";

// Create the initial state
const initialState = {
  translateX : false
}
// Create the slice of the state
const cardSlice = createSlice({
    // The name of the slice
    name : 'activeCard',
    // The initial state of the slice
    initialState,
    // The reducers of the slice
    reducers : {
        setActiveCard : (state)=>{
          if (state.translateX == false) {
            state.translateX = !state.translateX;
          } else{
            state.translateX = state.translateX;
          }
          
        }
    }
});

// Export the actions of the slice
export const { setActiveCard } = cardSlice.actions;
// Export the reducer of the slicel
export const cardReducer = cardSlice.reducer;