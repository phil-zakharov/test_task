import type { CocktailModel } from '~/shared/models/cocktail';

type Result = Record<
  string,
  {
    instructions: string[];
    ingredients: [string, string][];
  }
>;

export const prepareDrink = (data?: CocktailModel): Result => {
  const map: Result = {};

  if (!data) {
    return map;
  }

  data?.drinks.forEach((drink) => {
    map[drink.strDrink] = {
      instructions: [],
      ingredients: [],
    };

    Object.entries(drink).forEach(([key, value]) => {
      if (key.startsWith('strInstructions')) {
        if (value) {
          map[drink.strDrink].instructions.push(value as string);
        }
      } else if (key.startsWith('strMeasure')) {
        if (value) {
          const index = Number(key.replace('strMeasure', ''));
          if (!map[drink.strDrink].ingredients[index]) {
            map[drink.strDrink].ingredients[index] = ['', ''];
          }
          map[drink.strDrink].ingredients[index][0] = value;
        }
      } else if (key.startsWith('strIngredient')) {
        if (value) {
          const index = Number(key.replace('strIngredient', ''));
          if (!map[drink.strDrink].ingredients[index]) {
            map[drink.strDrink].ingredients[index] = ['', ''];
          }
          map[drink.strDrink].ingredients[index][1] = value;
        }
      }
    });
  });

  return map;
};
