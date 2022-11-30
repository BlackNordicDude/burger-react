import { FC } from 'react'
import { useSelector } from 'react-redux'
import src from '../../images/done.png'
import style from '../order-details/order-details.module.css'


const OrderDetails:FC = () => {
    const { order, orderError, orderRequest } = useSelector(store => ({
          // @ts-ignore: Unreachable code error
        order: store.order.order,
          // @ts-ignore: Unreachable code error
        orderError: store.order.orderError,
          // @ts-ignore: Unreachable code error
        orderRequest: store.order.orderRequest,
    })) 

    return (
        <>
            { 
                !orderError ? (
                <>
                   { !orderRequest ? (
                    <>
                        <p className={`mb-8 text text_type_digits-large ${style.number}`}>{order}</p>
                        <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
                    </>
                    ) : (
                        <p className="mb-15 text text_type_main-large">Ожидаем номер заказа...</p>
                    )}
                    <img src={src} alt="done" />
                    <p className="mt-15 mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                </>
            ) : (<p>Something went wrong</p>)
            }
        </>
    )
}

export default OrderDetails;