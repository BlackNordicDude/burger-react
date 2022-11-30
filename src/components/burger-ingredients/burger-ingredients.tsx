import { useMemo, useRef, FC } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from '../ingredients-list/ingredients-list';
import style from '../burger-ingredients/burger-ingredients.module.css';
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TAB } from '../../services/actions/index';
import { Link, Element } from 'react-scroll';
import { TIngredient } from "../../utils/types";


const BurgerIngredients: FC = () => {

    const { ingredients, currentTab } = useSelector(store => {
        return ({
              // @ts-ignore: Unreachable code error
            ingredients: store.ingredients.ingredients,
              // @ts-ignore: Unreachable code error
            currentTab: store.tab.currentTab
        })
    })
    const dispatch = useDispatch();

    const scrollRef = useRef<HTMLUListElement>(null);
    const bunRef = useRef<HTMLDivElement>(null);
    const sauceRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);                          

    const buns = useMemo(() => ingredients.filter((el: TIngredient) => el.type === 'bun'),[ingredients]) 
    const sauces = useMemo(() => ingredients.filter((el: TIngredient) => el.type === 'sauce'),[ingredients]) 
    const main = useMemo(() => ingredients.filter((el: TIngredient) => el.type === 'main'),[ingredients]) 
    
    const setCurrentTab = (tab: string) => {
        dispatch({type: CHANGE_TAB, tab: tab}) 
    }

    const handleScroll = () => {
        const scrollBlockPos = scrollRef.current !== null ? scrollRef.current.getBoundingClientRect().top : 0;

        const bunHeaderPos = bunRef.current !== null ? bunRef.current.getBoundingClientRect().top : 0;
        const sauceHeaderPos = sauceRef.current !== null ? sauceRef.current.getBoundingClientRect().top : 0;
        const mainHeaderPos = mainRef.current !== null ? mainRef.current.getBoundingClientRect().top : 0;

        const bunsDif = Math.abs(scrollBlockPos - bunHeaderPos);
        const saucesDif = Math.abs(scrollBlockPos - sauceHeaderPos);
        const mainsDif = Math.abs(scrollBlockPos - mainHeaderPos);

        if (bunsDif < saucesDif) {
            setCurrentTab("buns") 
        } else if (saucesDif < mainsDif) {
            setCurrentTab("sauces")
        } else {
            setCurrentTab("main")
        }
    }

    return (
        <section className="mr-10">
            <ul className={style.tabs}>
                <Link to="buns" spy={true} smooth={true} duration={250} containerId='categores'>
                    <Tab value="buns" active={currentTab === 'buns'} onClick={setCurrentTab}>
                        Булки  
                    </Tab>
                </Link>  
                <Link to="sauces" spy={true} smooth={true} duration={250} containerId='categores'>
                    <Tab value="sauces" active={currentTab === 'sauces'} onClick={setCurrentTab}>
                        Соусы  
                    </Tab>
                </Link>
                <Link to="main" spy={true} smooth={true} duration={250} containerId='categores'>
                    <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                        Начинка  
                    </Tab>
                </Link>        
            </ul>
            <ul className={style.ingredients} id='categores' ref={scrollRef} onScroll={handleScroll}>
                <Element name='buns'>
                    <IngredientCategory title='Булки' id='buns' categoryData={buns} refer={bunRef}/>
                </Element>
                <Element name='sauces'>
                    <IngredientCategory title='Соусы' id='sauces' categoryData={sauces} refer={sauceRef}/>
                </Element>
                <Element name='main'>
                    <IngredientCategory title='Начинка' id='main' categoryData={main} refer={mainRef}/>
                </Element>
            </ul>
        </section>
    )
}

export default BurgerIngredients