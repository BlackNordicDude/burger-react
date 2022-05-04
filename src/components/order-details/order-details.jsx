import src from '../../images/done.png'
import style from '../order-details/order-details.module.css'
import { BurgerContext } from '../../contexts/burger-context'
import { useContext } from 'react'

const OrderDetails = () => {
    const {state} = useContext(BurgerContext);

    return (
        <>
            <p className={`mb-8 text text_type_digits-large ${style.number}`}>{state.order}</p>
            <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
            <img src={src} alt="done" />
            <p className="mt-15 mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;