import { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import style from './app.module.css';

import { getIngredientsData } from '../../utils/burger-api';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);
  const [ingredientLoadFail, setIngredientLoadFail] = useState(false);
  const [order, setOrder] = useState(null);
  const closeOrderModar = () => setOrder(null);
  const [ingredientInModal, setIngredientInModal] = useState(null)
  const closeIngredientModal = () => setIngredientInModal(null)

  useEffect(() => {
    getIngredientsData()
      .then(setIngredients)
      .catch(() => setIngredientLoadFail(true))
      .finally(() => setIngredientsLoading(false))
  },[])

  return (
    <div className={style.app}>
      <AppHeader/>
      {
        ingredientsLoading ? (<h1 className='text text_type_main-large'>Loading data...</h1>) :
        ingredientLoadFail ? (<h1 className='text text_type_main-large'>Loading error</h1>) :
        (<main className={style.main}>
        <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
        <div className={style.sections}>
          <BurgerIngredients ingredients={ingredients} setIngredientInModal={setIngredientInModal}/>
          <BurgerConstructor ingredientsInBurger={ingredients} setOrder={setOrder}/>
        </div>
      </main>)
      }
      {order && (
                <Modal closeModal={closeOrderModar}>
                    <OrderDetails/> 
                </Modal>
            )}
      {ingredientInModal && (
            <Modal title='Детали ингредиента' closeModal={closeIngredientModal}>
               <IngredientDetails ingredientData={ingredientInModal}/>
            </Modal>
        )}
    </div>
  );
}

export default App;
