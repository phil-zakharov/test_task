import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '~/shared/api/baseQuery'
import type { CocktailCode } from './types'
import type { CocktailModel } from '~/shared/models/cocktail'

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCocktails: builder.query<CocktailModel, CocktailCode | undefined>({
      query: (code?: CocktailCode) => ({
        url: `json/v1/1/search.php?s=${code}`,
        method: "GET"
      }),
    }),
  }),
})

export const { useGetCocktailsQuery } = cocktailApi