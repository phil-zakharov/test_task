import { Navigate, Routes as RRRoutes, Route } from 'react-router';
import { CocktailCode } from '~/entities/cocktails/types';
import { Cocktail } from '~/pages/Cocktail';
import { NotFound } from '~/pages/NotFound';

export function Routes() {
  return (
    <RRRoutes>
      <Route index path="/" element={<Navigate to={`/cocktail/${CocktailCode.MARGARITA}`} />} />
      <Route path="/cocktail/:code" element={<Cocktail />} />
      <Route path="*" element={<NotFound />} />
    </RRRoutes>
  );
}
