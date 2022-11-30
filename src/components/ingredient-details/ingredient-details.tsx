import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FC } from 'react';
import style from '../ingredient-details/ingredient-details.module.css'
import { TIngredient } from '../../utils/types';

const IngredientDetails: FC = () => {
    
    const { id } = useParams<{id? : string}>();
    
    const {ingredients} = useSelector(store => ({
  // @ts-ignore: Unreachable code error
        ingredients: store.ingredients.ingredients,
    }))
    if (ingredients.length === 0) return <p>Loading...</p>

    const selectedIngredient = ingredients.find((ingredient: TIngredient ) => ingredient._id === id)
    const {image_large, name, calories, fat, proteins, carbohydrates} = selectedIngredient;

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
        </>
    )
}

export default IngredientDetails