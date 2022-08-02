import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../../src/reducers/newsSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV === "development" ? true : false,
});

export default store;
