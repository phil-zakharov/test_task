/** @format */

export interface CocktailModel {
  drinks: DrinksModel[];
}

interface DrinksModel {
  strDrink: string;
  strCategory: string;
  strAlcoholic: 'Alcoholic';
  strGlass: 'Cocktail glass';
  strDrinkThumb: string;
  [key: `strInstructions${string}`]: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}
