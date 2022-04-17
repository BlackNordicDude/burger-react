import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from 'prop-types';
import {ingredientsPropsType} from '../../utils/prop-type';
import style from '../ingredients-item/ingredients-item.module.css';

const Ingredient = ({ ingredientData, count, onClick }) => {
    const {image, price, name} = ingredientData;

    const HandleClick = () => {
        onClick(ingredientData)
    }
    return (
        <article className={`mb-8 ${style.ingredient}`} onClick={HandleClick}>
            {count && <Counter count={count} size="default"/>}
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
    count: PropTypes.number,
    onСlick: PropTypes.func
};

export default React.memo(Ingredient);