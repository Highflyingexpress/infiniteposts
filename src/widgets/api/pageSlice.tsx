import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => action.payload,
  },
})

export const { setPage } = pageSlice.actions
export const pageReducer = pageSlice.reducer
