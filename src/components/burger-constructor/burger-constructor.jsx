import React from "react";  
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrderNum } from "../../services/actions/order";
import { useDispatch, useSelector } from "react-redux";
import style from '../burger-constructor/burger-constructor.module.css';
import { ADD_BUN, ADD_INNER, REMOVE_INNER, PLUS_COST, MINUS_COST, RESET_BUN_COST, SORT_INGREDIENTS, PLUS_V, MINUS_V } from "../../services/actions";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { InnerItem } from '../burger-constructor-inner/burger-constructor-inner';
import { Link, useLocation } from "react-router-dom";

const BurgerConstructor = () => {
    const location = useLocation();

    const { bun, inner, totalCost, number, user } = useSelector(store => {
        return ({
            bun: store.constructorState.constructorIngredient.bun,
            inner: store.constructorState.constructorIngredient.inner,
            totalCost: store.constructorState.totalCost,
            number: store.order.order,
            user: store.user.data,
        })
    })
    const dispatch = useDispatch();

    const removeIngredient = (item) => {
        dispatch({type: MINUS_V, id: item._id})
        dispatch({type: REMOVE_INNER, payload: item})
        dispatch({type: MINUS_COST, payload: item.price})
    }

    const setOrder = () => {
        const arrOfIngredients = [];
        arrOfIngredients.push(bun._id);
        inner.map(el => arrOfIngredients.push(el._id));
        dispatch(getOrderNum(arrOfIngredients))
    }

    const onDropHandler = (item) => {
        dispatch({type: PLUS_V, id: item._id})
        const cloneItem = {...item};
        cloneItem.uid = uuidv4();
        if (item.type === 'bun') {
            if (!bun) {
                dispatch({type: ADD_BUN, payload: cloneItem})
                dispatch({type: PLUS_COST, payload: cloneItem.price * 2})
            } else {
                dispatch({type: RESET_BUN_COST})
                dispatch({type: MINUS_V, id: bun._id})
                dispatch({type: ADD_BUN, payload: cloneItem})
                dispatch({type: PLUS_COST, payload: cloneItem.price * 2})
            }
        } else {
            dispatch({type: ADD_INNER, payload: cloneItem})
            dispatch({type: PLUS_COST, payload: cloneItem.price})
        } 
    }

    const [, dropConRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            onDropHandler(item)
        }
    })

    const moveItem = (dragIndex, hoverIndex) => {
        const dragIng = inner[dragIndex];
        const newArr = [...inner];
        newArr.splice(dragIndex, 1);
        newArr.splice(hoverIndex, 0, dragIng);

        dispatch({type: SORT_INGREDIENTS, payload: newArr})
    }

    const renderInner = (el, indx) => {
        return (
            <InnerItem
                className={style.in_burger_elem}
                key={el.uid}
                index={indx}
                moveItem={moveItem}
                >
                <DragIcon type="primary"/>
                <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image_mobile}
                    handleClose={() => removeIngredient(el)}
                />
            </InnerItem>
        )
    }
    return ( 
        <section className={style.constructor}>
             <ul 
                className={style.constructor_list}
                ref={dropConRef}
                >
             { !!bun ? 
                <div className={style.buns}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (????????)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </div> 
                : 
                <div className={style.buns}>
                    <div className={style.bun_none}>
                        <p className="text text_type_main-default">???????????????? ??????????</p>
                    </div>
                </div>}
                { inner.length !== 0 ? 
                <div className={`pr-1 ${style.in_burger}`}>
                    {inner.map((el, indx) => renderInner(el, indx))}
                </div> 
                :
                <div className={style.inner_none}>
                    <p className="text text_type_main-default">???????????????? ??????????????</p> 
                </div>}
                { !!bun ?
                <div className={style.buns}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (??????)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </div>  
                :
                <div className={style.buns}>
                    <div className={style.bun_none}>
                        <p className="text text_type_main-default">???????????????? ??????????</p>
                    </div>
                </div> }
            </ul>
            <div className={`mt-10 ${style.ready}`}>
                <div className={`mr-10 ${style.total_price}`}>
                    <p className="text text_type_digits-medium">{totalCost}</p>  
                    <CurrencyIcon type='primary'/>
                </div> 
                { !!bun ? user ? 
                    
                        <Link 
                        className={style.order_link}
                        to={{
                            pathname: `/feed/${number}`,
                            state: { background: location },
                        }}>
                            <Button onClick={setOrder}>
                                ???????????????? ??????????
                            </Button>
                        </Link> 
                      : 
                   
                        <Link 
                        className={style.order_link}
                        to={{
                            pathname: `/login`
                        }}> 
                            <Button>
                                ???????????????? ?????????? 
                            </Button>
                        </Link> 
                   :
                    <Button disabled={true}>
                        ???????????????? ??????????
                    </Button>
                }                
            </div>
        </section>
    )
}

export default React.memo(BurgerConstructor);
