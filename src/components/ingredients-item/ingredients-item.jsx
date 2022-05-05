import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useContext } from "react";
import {ingredientsPropsType} from '../../utils/prop-type';
import style from '../ingredients-item/ingredients-item.module.css';
import { BurgerContext } from "../../contexts/burger-context";

const Ingredient = ({ ingredientData }) => {
    const {dispatcher} = useContext(BurgerContext);
    const {image, price, name, __v} = ingredientData;

    const HandleClick = () => {
        dispatcher({type: 'selectIngredient', payload: ingredientData})
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