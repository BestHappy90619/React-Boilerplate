import { configureStore } from "@reduxjs/toolkit";
import redu from "./reducers/Reducer";

const reducer = {
  reducerName: redu
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
