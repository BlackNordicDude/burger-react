import { useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from '../ingredients-list/ingredients-list';
import style from '../burger-ingredients/burger-ingredients.module.css';
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TAB } from '../../services/actions/index'

const BurgerIngredients = () => {

    const { ingredients, currentTab } = useSelector(store => {
        return ({
            ingredients: store.ingredients.ingredients,
            currentTab: store.tab.currentTab
        })
    })
    const dispatch = useDispatch();

    const onTabClick = (tab) => {
        dispatch({type: CHANGE_TAB, tab: tab})                           
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
                <IngredientCategory title='Булки' id='buns' categoryData={buns}/>
                <IngredientCategory title='Соусы' id='sauces' categoryData={sauces}/>
                <IngredientCategory title='Начинка' id='main' categoryData={main}/>
            </ul>
        </section>
    )
}

export default BurgerIngredients