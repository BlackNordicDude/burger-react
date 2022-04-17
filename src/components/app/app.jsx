import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import style from './app.module.css';

import { getIngredientsData } from '../../utils/burger-api';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);

  useEffect(() => {
    getIngredientsData()
      .then(setIngredients)
      .catch(() => alert('some err'))
      .finally(() => setIngredientsLoading(false))
  },[])

  return (
    <div className={style.app}>
      <AppHeader/>
      {
        ingredientsLoading ? (<h1 className='text text_type_main-large'>Loading data...</h1>) : 
        (<main className={style.main}>
        <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
        <div className={style.sections}>
          <BurgerIngredients ingredients={ingredients}/>
          <BurgerConstructor ingredientsInBurger={ingredients}/>
        </div>
      </main>)
      }
    </div>
  );
}

export default App;
