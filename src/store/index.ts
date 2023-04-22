import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../redux/contactSlice";

export const store = configureStore({
  reducer: {
    contactList: contactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
