import { configureStore } from "@reduxjs/toolkit";
import mapsReducer from "./maps";

const store = configureStore({
  reducer: {
    maps: mapsReducer,
  },
});

export default store;
