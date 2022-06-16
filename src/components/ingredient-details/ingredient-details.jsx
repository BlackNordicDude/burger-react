import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getIngredientsData } from '../../services/actions/ingredients';
import style from '../ingredient-details/ingredient-details.module.css'


const IngredientDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getIngredientsData())
    },[dispatch])
    
    const id = location.pathname.split('/')[2];

    const {ingredients, ingredientsRequest} = useSelector(store => ({
        ingredients: store.ingredients.ingredients,
        ingredientsRequest: store.ingredients.ingredientsRequest
    }))

    console.log(ingredients, ingredientsRequest);

    const selectedIngredient = ingredients.find(ingredient => ingredient._id === id)
    const {image_large, name, calories, fat, proteins, carbohydrates} = selectedIngredient;

    return (
        !ingredients ? <p>Loading...</p> :
        (<>
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
        </>)
    )
}

export default IngredientDetails