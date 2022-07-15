import {
    GET_ORDER_REQUEST,
    GET_ORDER_FAILED,
    GET_ORDER_SUCCESS,
    RESET_CONSRUCTOR,
    RESET_V
} from './index'
import { getOrder } from '../../utils/burger-api';

export function getOrderNum(order) {
    return function(dispatch) {
        dispatch({type: GET_ORDER_REQUEST})
        getOrder(order)
        .then(data => {
            dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: data.order.number,
                })
            dispatch({
                type: RESET_CONSRUCTOR,
            })
            dispatch({
                type: RESET_V,
            })
        })
        .catch(err => dispatch({type: GET_ORDER_FAILED}))
    }
}