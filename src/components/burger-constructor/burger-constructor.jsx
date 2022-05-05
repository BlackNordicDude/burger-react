import React, { useContext } from "react";  
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerContext } from "../../contexts/burger-context";
import { getOrderNum } from "../../utils/burger-api";

import style from '../burger-constructor/burger-constructor.module.css';

const BurgerConstructor = () => {

    const {state, dispatcher} = useContext(BurgerContext);
    const setOrder = () => {

        const arrOfIngredients = [];
        arrOfIngredients.push(state.constructorIngredient.bun[0]._id);
        state.constructorIngredient.inner.map(el => arrOfIngredients.push(el._id));
        console.log(arrOfIngredients);

        getOrderNum(arrOfIngredients)
        .then(order => dispatcher({type: 'setOrder', payload: order})) 
        .catch(() => {
            dispatcher({type: 'errorGetOrder'});
            dispatcher({type: 'setOrder', payload: 'error'})
        })
    }

    const buns = state.constructorIngredient.bun;
    const inner = state.constructorIngredient.inner;

    return ( 
        <section className={style.constructor}>
             <ul className={style.constructor_list}>
             { state.constructorIngredient.bun.length !== 0 && <div className={style.buns}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${buns[0].name} (верх)`}
                        price={buns[0].price}
                        thumbnail={buns[0].image_mobile}
                    />
                </div> }
                {state.constructorIngredient.inner.length !== 0 && <div className={`pr-1 ${style.in_burger}`}>
                    {inner.map((el, indx) => {  
                        return (
                            <div 
                                className={style.in_burger_elem}
                                key={`${el._id}_${indx}`}
                                >
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                    text={el.name}
                                    price={el.price}
                                    thumbnail={el.image_mobile}
                                />
                            </div>
                            )
                        })}
                </div>}
                { state.constructorIngredient.bun.length !== 0 && <div className={style.buns}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${buns[0].name} (низ)`}
                        price={buns[0].price}
                        thumbnail={buns[0].image_mobile}
                    />
                </div> }
            </ul>
            <div className={`mt-10 ${style.ready}`}>
                <div className={`mr-10 ${style.total_price}`}>
                    <p className="text text_type_digits-medium">{state.totalCost}</p>  
                    <CurrencyIcon type='primary'/>
                </div>
                <Button onClick={setOrder}>Оформите заказ</Button>  
            </div>
        </section>
    )
}

export default React.memo(BurgerConstructor);
