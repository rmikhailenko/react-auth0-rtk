import { configureStore } from "@reduxjs/toolkit";
import defaultSlice from "./defaultSlice";
import { defaultApi } from "./defaultApi";

export const store = configureStore({
  reducer: {
    default: defaultSlice,
    [defaultApi.reducerPath]: defaultApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(defaultApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
