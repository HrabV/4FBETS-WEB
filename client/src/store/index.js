import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === "development" ? true : false,
});

export default store;
