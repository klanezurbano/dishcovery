import { createSlice } from "@reduxjs/toolkit";

export const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload
    },
  }
})

export const { setUser } = loggedInUserSlice.actions
