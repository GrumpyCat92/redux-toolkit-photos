import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./Slices/PhotoSlice";

const store = configureStore({
  reducer: {
    photo: photoSlice,
  },
});

export default store;
