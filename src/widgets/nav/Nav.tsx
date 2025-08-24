import { useState } from 'react';
import styles from './Nav.module.scss';
import { CocktailCode } from '~/entities/cocktails/types';
import { NavLink } from 'react-router';

export function Nav() {
  const [items] = useState(Object.values(CocktailCode));

  return (
    <div className={styles.container}>
      <ul>
        {items.map((code) => (
          <li key={code}>
            <NavLink to={`/cocktail/${code}`}>{code}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
