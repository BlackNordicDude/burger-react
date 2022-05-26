import { useMemo, useRef } from "react";
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

    const scrollRef = useRef(null);
    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);                          

    const buns = useMemo(() => ingredients.filter(el => el.type === 'bun'),[ingredients]) 
    const sauces = useMemo(() => ingredients.filter(el => el.type === 'sauce'),[ingredients]) 
    const main = useMemo(() => ingredients.filter(el => el.type === 'main'),[ingredients]) 
    
    const onTabClick = (tab) => {
        dispatch({type: CHANGE_TAB, tab: tab}) 
    }

    const handleScroll = () => {
        const scrollBlockPos = scrollRef.current.getBoundingClientRect().top;

        const bunHeaderPos = bunRef.current.getBoundingClientRect().top;
        const sauceHeaderPos = sauceRef.current.getBoundingClientRect().top;
        const mainHeaderPos = mainRef.current.getBoundingClientRect().top;

        const bunsDif = Math.abs(scrollBlockPos - bunHeaderPos);
        const saucesDif = Math.abs(scrollBlockPos - sauceHeaderPos);
        const mainsDif = Math.abs(scrollBlockPos - mainHeaderPos);

        console.log(scrollBlockPos, 'scrollBlock');
        console.log(bunHeaderPos, 'bunHeader');
        console.log(sauceHeaderPos, 'sauceHeaderPos');
        console.log(mainHeaderPos, 'mainHeaderPos');

        if (bunsDif < saucesDif) {
            onTabClick("buns") 
        } else if (saucesDif < mainsDif) {
            onTabClick("sauces")
        } else {
            onTabClick("main")
        }
    }

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
            <ul className={style.ingredients} ref={scrollRef} onScroll={handleScroll}>
                <IngredientCategory title='Булки' id='buns' categoryData={buns} refer={bunRef}/>
                <IngredientCategory title='Соусы' id='sauces' categoryData={sauces} refer={sauceRef}/>
                <IngredientCategory title='Начинка' id='main' categoryData={main} refer={mainRef}/>
            </ul>
        </section>
    )
}

export default BurgerIngredients