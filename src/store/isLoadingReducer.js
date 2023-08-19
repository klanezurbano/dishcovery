import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    markLoading: () => {
      return true
    },
    unmarkLoading: () => {
      return false
    }
  }
})

export const { markLoading, unmarkLoading } = isLoadingSlice.actions
