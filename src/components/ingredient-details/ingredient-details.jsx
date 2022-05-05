import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from '../ingredient-details/ingredient-details.module.css'
import { BurgerContext } from '../../contexts/burger-context';
import { useContext } from 'react';

const IngredientDetails = () => {

    const { state, dispatcher } = useContext(BurgerContext);
    const {image_large, name, calories, fat, proteins, carbohydrates} = state.selectedIngredient;
    const addInConstructor = () => {
        state.selectedIngredient.__v += 1;
        if (state.selectedIngredient.type === 'bun') {
            dispatcher({type: 'addBun', payload: state.selectedIngredient})
            dispatcher({type: 'calcCost', payload: state.selectedIngredient.price * 2})
        } else {
            dispatcher({type: 'addInner', payload: state.selectedIngredient})
            dispatcher({type: 'calcCost', payload: state.selectedIngredient.price})
        } 
    }
    return (
        <>
            <img src={image_large} alt="Ingredient" />
            <p className='mt-4 mb-8 text text_type_main-medium'>{name}</p>
            <div className={`text_color_inactive ${style.descr}`}>
                <div className='mr-5'>
                    <p className="mb-2 text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>
                <div className='mr-5'>
                    <p className="mb-2 text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>
                <div className='mr-5'>
                    <p className="mb-2 text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>
                <div>
                    <p className="mb-2 text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
            <Button onClick={addInConstructor}>+</Button>
        </>
    )
}

export default IngredientDetails