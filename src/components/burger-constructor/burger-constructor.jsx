import React from "react";  
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrderNum } from "../../services/actions/order";
import { useDispatch, useSelector } from "react-redux";
import style from '../burger-constructor/burger-constructor.module.css';

const BurgerConstructor = () => {
    
    const { bun, inner, totalCost } = useSelector(store => {
        return ({
            bun: store.constructor.constructorIngredient.bun,
            inner: store.constructor.constructorIngredient.inner,
            totalCost: store.constructor.totalCost
        })
    })
    const dispatch = useDispatch();
    const setOrder = () => {

        const arrOfIngredients = [];
        arrOfIngredients.push(bun._id);
        inner.map(el => arrOfIngredients.push(el._id));

        dispatch(getOrderNum(arrOfIngredients))
    }

    return ( 
        <section className={style.constructor}>
             <ul className={style.constructor_list}>
             { bun && <div className={style.buns}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </div> }
                { inner.length !== 0 && <div className={`pr-1 ${style.in_burger}`}>
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
                { bun && <div className={style.buns}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </div> }
            </ul>
            <div className={`mt-10 ${style.ready}`}>
                <div className={`mr-10 ${style.total_price}`}>
                    <p className="text text_type_digits-medium">{totalCost}</p>  
                    <CurrencyIcon type='primary'/>
                </div>
                <Button onClick={setOrder}>Оформите заказ</Button>  
            </div>
        </section>
    )
}

export default React.memo(BurgerConstructor);
