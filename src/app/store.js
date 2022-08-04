import { configureStore } from "@reduxjs/toolkit";
import { valorantApi } from "../services/valorantApi";

const store = configureStore({
  reducer: {
    [valorantApi.reducerPath]: valorantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(valorantApi.middleware),
});

export default store;