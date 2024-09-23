// 1. reducer + 2. actions 

import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: { },
})

export default productSlice.reducer