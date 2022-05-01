import { configureStore } from "@reduxjs/toolkit";
import mapreducer from "../features/MapSlice";
export const store = configureStore({
  reducer: {
    map: mapreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
