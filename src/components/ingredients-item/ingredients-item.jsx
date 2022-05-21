import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDispatch } from "react-redux";
import {ingredientsPropsType} from '../../utils/prop-type';
import style from '../ingredients-item/ingredients-item.module.css';
import { ADD_MODAL_INGREDIENT, OPEN_MODAL } from "../../services/actions";

const Ingredient = ({ ingredientData }) => {
    const {image, price, name, __v} = ingredientData;
    const dispatch = useDispatch();
    const HandleClick = () => {
        dispatch({type: ADD_MODAL_INGREDIENT, selectedIngredient: ingredientData})
        dispatch({type: OPEN_MODAL})
    }
    return (
        <article className={`mb-8 ${style.ingredient}`} onClick={HandleClick}>
            {__v !== 0 && <Counter count={__v} size="default"/>}
            <img src={image} alt='Ингредиент' className={style.img}/>
            <div className={`mt-1 mb-1 ${style.cost}`}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className={`${style.text} text text_type_main-default`}>{name}</p>
        </article>
    )
}

Ingredient.propTypes = {
    ingredientData: ingredientsPropsType.isRequired,
};

export default React.memo(Ingredient);