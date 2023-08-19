import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./mealsReducer";
import { isLoadingSlice } from "./isLoadingReducer";
import { favoriteMealsSlice } from "./favoriteMealsReducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk"

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  meals: mealsSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  favoriteMeals: favoriteMealsSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
