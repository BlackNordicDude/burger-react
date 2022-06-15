import {
    GET_ORDER_REQUEST,
    GET_ORDER_FAILED,
    GET_ORDER_SUCCESS
} from './index'
import { getOrder } from '../../utils/burger-api';

export function getOrderNum(order) {
    return function(dispatch) {
        dispatch({type: GET_ORDER_REQUEST})
        getOrder(order)
        .then(data => {
            dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: data.order.number
                })
        })
        .catch(err => dispatch({type: GET_ORDER_FAILED}))
    }
}