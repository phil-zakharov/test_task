/** @format */

import { Navigate, useParams } from 'react-router';
import { PageLayout } from '~/app/layouts/PageLayout';
import { useGetCocktailsQuery } from '~/entities/cocktails/api';
import { CocktailCode } from '~/entities/cocktails/types';
import styles from './Cocktail.module.scss';
import { useMemo } from 'react';

export function Cocktail() {
  const params = useParams<{ code: CocktailCode }>();
  const { data } = useGetCocktailsQuery(params.code);

  const drinkInfo = useMemo(() => {
    const map: Record<
      string,
      {
        instructions: string[];
        ingredients: [string, string][];
      }
    > = {};

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
  }, [data?.drinks]);

  if (!params.code) {
    return <Navigate to="/" />;
  }

  return (
    <PageLayout>
      <h1 className={styles.title}>{params.code}</h1>
      <div className={styles.list}>
        {data?.drinks.map((drink, ind) => (
          <div key={ind} className={styles.item}>
            <div className={styles.desc}>
              <h4>{drink.strDrink}</h4>
              <ul>
                <li>{drink.strCategory}</li>
                <li>{drink.strAlcoholic}</li>
                <li>{drink.strGlass}</li>
              </ul>

              <h5>Instructions:</h5>
              <div>
                {drinkInfo[drink.strDrink].instructions.map((ins, ind) => (
                  <p key={ind} className={styles.instruction}>
                    {ins}
                  </p>
                ))}
              </div>
              <h5>List of ingredients:</h5>
              <div>
                {drinkInfo[drink.strDrink].ingredients.map(
                  ([measure, ingredient], ind) => (
                    <div key={ind} className={styles.ingredient}>
                      <p>{measure}</p>
                      <p>{ingredient}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className={styles.image}>
              <img loading='lazy' src={drink.strDrinkThumb} />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
