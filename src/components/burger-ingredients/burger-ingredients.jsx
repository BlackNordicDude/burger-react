import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from '../ingredients-list/ingredients-list';
import style from '../burger-ingredients/burger-ingredients.module.css';

const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = React.useState('buns')

    /* отфильтровать игредиенты для передачи в пропсы компонентов категории*/
    let buns = ingredients.filter(el => el.type === 'bun');
    let sauces = ingredients.filter(el => el.type === 'sauce');
    let main = ingredients.filter(el => el.type === 'main');
    

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

export default BurgerIngredients