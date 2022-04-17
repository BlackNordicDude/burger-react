import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';
import {ingredientsPropsType} from '../../utils/prop-type'
import style from '../burger-ingredients/burger-ingredients.module.css';

const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = React.useState('buns')

    /* отфильтровать игредиенты для передачи в пропсы компонентов категории*/
    const buns = ingredients.filter(el => el.type === 'bun');
    const sauces = ingredients.filter(el => el.type === 'sauce');
    const main = ingredients.filter(el => el.type === 'main');
    

    return (
        <section className="mr-10">
            <ul className={style.tabs}>
                <Tab value="buns" active={currentTab === 'buns'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauces" active={currentTab === 'sauces'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                    Начинка
                </Tab>
            </ul>
            <ul className={style.ingredients}>
                <IngredientCategory title='Булки' id='buns' categoryData={buns}/>
                <IngredientCategory title='Соусы' id='sauces' categoryData={sauces}/>
                <IngredientCategory title='Начинка' id='main' categoryData={main}/>
            </ul>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropsType.isRequired).isRequired,
};

export default BurgerIngredients