import { createSlice } from "@reduxjs/toolkit";

export const favoriteMealsSlice = createSlice({
  name: 'favoriteMeals',
  initialState: [],
  reducers: {
    addToFavoriteMeals: (state, action) => {
      const newState = [...state]
      newState.push(action.payload)

      return newState
    },
    removeToFavoriteMeals: (state, action) => {
      const newState = [...state]

      const index = newState.findIndex(item => item.id === action.payload)

      if (index !== -1) {
        newState.splice(index, 1)
      }
      return newState
    }
  }
})

export const { addToFavoriteMeals, removeToFavoriteMeals } = favoriteMealsSlice.actions
