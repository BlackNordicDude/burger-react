import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { useSelector, useDispatch } from 'react-redux';

import style from './app.module.css';

import { getIngredientsData } from '../../services/actions/ingredients';
import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const { ingredientsError, ingredientsRequest, order, isModalOpen, selectedIngredient } = useSelector(store => ({
    ingredientsError: store.ingredients.ingredientsError,
    ingredientsRequest: store.ingredients.ingredientsRequest,
    order: store.order.order,
    isModalOpen: store.modal.isModalOpen,
    selectedIngredient: store.modal.selectedIngredient
  }))
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(getIngredientsData()),[dispatch]);

  return (
    <div className={style.app}>
      <AppHeader/>
      {
        ingredientsRequest ? (<h1 className='text text_type_main-large'>Loading data...</h1>) :
        ingredientsError ? (<h1 className='text text_type_main-large'>Loading error</h1>) :
        (<main className={style.main}>
          <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
          <div className={style.sections}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider> 
          </div>
        </main>)
      }
      {!!order && !!isModalOpen && (
            <Modal>
                <OrderDetails/> 
            </Modal>
        )}
      {!!selectedIngredient && !!isModalOpen && (
            <Modal title='Детали ингредиента'>
               <IngredientDetails ingredientData={selectedIngredient}/>
            </Modal>
        )}
    </div>
  );
}

export default App;
