import { useEffect, useReducer, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { BurgerContext } from '../../contexts/burger-context';
import { reducer } from '../../utils/reducer';

import style from './app.module.css';

import { getIngredientsData } from '../../utils/burger-api';  

const initState = {
  ingredients: [],
  loading: true,
  error: false,
  order: null,
  selectedIngredient: null,
  constructorIngredient: {
    bun: [],
    inner: []
  },
  totalCost: 0
}

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [state, dispatcher] = useReducer(reducer, initState);

  useEffect(() => {
    getIngredientsData()
      .then(setIngredients)
      .catch(() => dispatcher({type: 'error'}))
      .finally(() => dispatcher({type: 'endLoad'}))
  },[])

  useEffect(() => {
    dispatcher({type: 'setIngredients', payload: ingredients})
  },[ingredients])

  return (
    <div className={style.app}>
    <BurgerContext.Provider value={{state, dispatcher}}>
      <AppHeader/>
      {
        state.loading ? (<h1 className='text text_type_main-large'>Loading data...</h1>) :
        state.error ? (<h1 className='text text_type_main-large'>Loading error</h1>) :
        (<main className={style.main}>
        <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
        <div className={style.sections}>
            <BurgerIngredients />
            <BurgerConstructor />
        </div>
      </main>)
      }
      {state.order && (
                <Modal>
                    <OrderDetails/> 
                </Modal>
            )}
      {state.selectedIngredient && (
            <Modal title='Детали ингредиента'>
               <IngredientDetails ingredientData={state.selectedIngredient}/>
            </Modal>
        )}
    </BurgerContext.Provider>
    </div>
  );
}

export default App;
