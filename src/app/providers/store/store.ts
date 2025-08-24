import { configureStore } from '@reduxjs/toolkit'
import { cocktailApi } from '~/entities/cocktails/api'
import { cocktailSlice } from '~/entities/cocktails/slice'

export const store = configureStore({
  reducer: {
    cocktail: cocktailSlice.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware),
})

