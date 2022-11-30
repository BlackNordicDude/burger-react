import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import style from '../app-main/app-main.module.css'
import { FC } from 'react';

const AppMain:FC = ( ) => {
    const { ingredientsError, ingredientsRequest } = useSelector(store => ({
        // @ts-ignore: Unreachable code error
      ingredientsError: store.ingredients.ingredientsError,
        // @ts-ignore: Unreachable code error
      ingredientsRequest: store.ingredients.ingredientsRequest,
    }))
    return (
        ingredientsRequest ? (<h1 className='text text_type_main-large'>Loading data...</h1>) :
        ingredientsError ? (<h1 className='text text_type_main-large'>Loading error</h1>) :
        (<main>
          <p className={`text text_type_main-large mb-5`}>Соберите бургер</p>
          <div className={style.sections}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider> 
          </div>
        </main>
        )
    )
}

export default AppMain