import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {ingredientsPropsType} from '../../utils/prop-type';
import style from '../ingredients-item/ingredients-item.module.css';
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

const Ingredient = ({ ingredientData }) => {

    const {image, price, name, __v, _id} = ingredientData;

    const location = useLocation();

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: {...ingredientData}
    })

    return (
        <Link 
            className={`mb-8 ${style.ingredient}`} 
            to={{
                pathname: `/ingredients/${_id}`,
                state: { background: location },
            }}
            ref={dragRef}
            >
            {!!__v && <Counter count={__v} size="default"/>}
            <img src={image} alt='Ингредиент' className={style.img}/>
            <div className={`mt-1 mb-1 ${style.cost}`}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className={`${style.text} text text_type_main-default`}>{name}</p>
        </Link>
    )
}

Ingredient.propTypes = {
    ingredientData: ingredientsPropsType.isRequired,
};

export default React.memo(Ingredient);