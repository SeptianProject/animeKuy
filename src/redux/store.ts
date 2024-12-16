import { configureStore } from "@reduxjs/toolkit";
import toggleDrawer from "./slices/drawerSlice";

const store = configureStore({
     reducer: {
          drawer: toggleDrawer
     }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store