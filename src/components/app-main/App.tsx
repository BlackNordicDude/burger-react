import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import style from './app.module.css';

import data from '../../utils/data';

function App() {
  return (
    <div className={style.app}>
      <AppHeader/>
      <main className={style.main}>
        <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
        <div className={style.sections}>
          <BurgerIngredients ingredients={data}/>
          <BurgerConstructor ingredientsInBurger={data}/>
        </div>
      </main>
      
      
    </div>
  );
}

export default App;
