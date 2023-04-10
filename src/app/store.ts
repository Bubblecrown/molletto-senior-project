import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../slices/CardSlice";
import { modelReducer } from "../slices/HomeModel";
import { soundReducer } from "../slices/soundSlice";

export const store = configureStore({
  reducer: {
    activeCard: cardReducer,
    positionModel: modelReducer,
    audio: soundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
