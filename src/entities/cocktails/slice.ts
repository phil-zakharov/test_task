import { createSlice } from '@reduxjs/toolkit'

export interface CocktailState {
  value: number
}

const initialState: CocktailState = {
  value: 0,
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setValue() {}
  },
})

export const { setValue } = cocktailSlice.actions

export default cocktailSlice.reducer