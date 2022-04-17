import {ingredientsPropsType} from '../../utils/prop-type'

import style from '../ingredient-details/ingredient-details.module.css'

const IngredientDetails = ({ingredientData}) => {
    const {image_large, name, calories, fat, proteins, carbohydrates} = ingredientData;
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
                    <p className="mb-2 text text_type_main-default">Углевроды, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    ingredientData: ingredientsPropsType.isRequired
}

export default IngredientDetails