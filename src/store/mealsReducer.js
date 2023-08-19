import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [],
  reducers: {
    setMeals: (state, action) => {
      return action.payload
    }
  }
})

export const { setMeals } = mealsSlice.actions
