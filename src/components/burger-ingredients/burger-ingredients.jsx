import { useMemo, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';
import {ingredientsPropsType} from '../../utils/prop-type'
import style from '../burger-ingredients/burger-ingredients.module.css';

const BurgerIngredients = ({ingredients, setIngredientInModal}) => {
    const [currentTab, setCurrentTab] = useState('buns')

    const onTabClick = (tab) => {
        setCurrentTab(tab);                                
        const elem = document.getElementById(currentTab);  
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
    }

    const buns = useMemo(() => ingredients.filter(el => el.type === 'bun'),[ingredients]) 
    const sauces = useMemo(() => ingredients.filter(el => el.type === 'sauce'),[ingredients]) 
    const main = useMemo(() => ingredients.filter(el => el.type === 'main'),[ingredients]) 
    

    return (
        <section className="mr-10">
            <ul className={style.tabs}>
                <Tab value="buns" active={currentTab === 'buns'} onClick={onTabClick}>
                    Булки
                </Tab>
                <Tab value="sauces" active={currentTab === 'sauces'} onClick={onTabClick}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={onTabClick}>
                    Начинка
                </Tab>
            </ul>
            <ul className={style.ingredients}>
                <IngredientCategory title='Булки' id='buns' categoryData={buns} onIngredientClick={setIngredientInModal}/>
                <IngredientCategory title='Соусы' id='sauces' categoryData={sauces} onIngredientClick={setIngredientInModal}/>
                <IngredientCategory title='Начинка' id='main' categoryData={main} onIngredientClick={setIngredientInModal}/>
            </ul>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropsType.isRequired).isRequired,
    setIngredientInModal: PropTypes.func.isRequired
};

export default BurgerIngredients