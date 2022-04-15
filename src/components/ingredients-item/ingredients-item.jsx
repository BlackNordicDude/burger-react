import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import style from '../ingredients-item/ingredients-item.module.css';

const Ingredient = ({ingredientData, count, onClick}) => {
    const {image, price, name} = ingredientData;
    return (
        <article className={style.ingredient} onClick={onClick}>
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

export default React.memo(Ingredient);