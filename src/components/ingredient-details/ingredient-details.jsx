import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import style from '../ingredient-details/ingredient-details.module.css'
import { ADD_BUN, ADD_INNER, CALC_COST } from '../../services/actions';

const IngredientDetails = () => {
    const { selectedIngredient } = useSelector(store => ({selectedIngredient: store.selectedIngredient}))
    const dispatch = useDispatch();
    const {image_large, name, calories, fat, proteins, carbohydrates} = selectedIngredient;
    const addInConstructor = () => {
        selectedIngredient.__v += 1;
        if (selectedIngredient.type === 'bun') {
            dispatch({type: ADD_BUN, payload: selectedIngredient})
            dispatch({type: CALC_COST, payload: selectedIngredient.price * 2})
        } else {
            dispatch({type: ADD_INNER, payload: selectedIngredient})
            dispatch({type: CALC_COST, payload: selectedIngredient.price})
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