import React from "react";
import Ingredient from '../ingredients-item/ingredients-item';
import PropTypes from 'prop-types';
import {ingredientsPropsType} from '../../utils/prop-type';
import style from '../ingredients-list/ingredients-list.module.css';


const IngredientCategory = ({categoryData, title, id, onIngredientClick}) => {
    return (
        <>
        <h3 className={`text text_type_main-medium mb-6 mt-10`} id={id}>
            {title}
        </h3>
        <div className={style.category}>    
            { categoryData.map((el) => {
                return <Ingredient  count={1} ingredientData={el} key={el._id} onClick={onIngredientClick}/>
            })}
        </div>
        </>  
    )
}

IngredientCategory.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    categoryData: PropTypes.arrayOf(ingredientsPropsType.isRequired).isRequired,
    onIngredientClick: PropTypes.func.isRequired
};

export default React.memo(IngredientCategory);