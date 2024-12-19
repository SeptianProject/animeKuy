import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import toggleDrawer from "./slices/drawerSlice";
import loginAuth from "./slices/loginSlice";
import bookMarked from "./slices/bookMarkSlice";

const bookMarkedConfig = {
     key: 'bookMarks',
     storage,
     whitelist: ['bookMarked']
}

const persistedBookMarkReducer = persistReducer(bookMarkedConfig, bookMarked)

const rootReducer = combineReducers({
     drawer: toggleDrawer,
     login: loginAuth,
     bookMark: persistedBookMarkReducer
})

const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
          serializableCheck: {
               ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
          }
     })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store