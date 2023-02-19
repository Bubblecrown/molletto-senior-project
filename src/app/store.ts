import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../slices/CardSlice";

export const store = configureStore({
  reducer: { activeCard: cardReducer },
});
export type RootState = ReturnType<typeof store.getState>