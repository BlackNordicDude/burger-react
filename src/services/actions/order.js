import {
    GET_ORDER_REQUEST,
    GET_ORDER_FAILED,
    GET_ORDER_SUCCESS
} from './index'

const BURGER_API_URL = 'https:/norma.nomoreparties.space/api';

export function getOrderNum(order) {
    return function(dispatch) {
        dispatch({type: GET_ORDER_REQUEST})
        fetch(`${BURGER_API_URL}/orders`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({ingredients: order})
        })
        .then( res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: res.data.number
                })
            } else {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            }
        }).catch(err => dispatch({type: GET_ORDER_FAILED}))
    }
}