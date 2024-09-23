// 1. reducer + 2. actions 

import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'cartCounter',
  initialState,
  reducers: {
    incCartCounter(state) {
      state.value++
    },
    decCartCounter(state) {
      state.value--
    },
  },
})

export const { incCartCounter, decCartCounter } = counterSlice.actions
export default counterSlice.reducer