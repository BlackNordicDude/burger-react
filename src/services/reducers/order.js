import {
    GET_ORDER_REQUEST,
    GET_ORDER_FAILED,
    GET_ORDER_SUCCESS
} from '../actions/index';

const initialState = {
    order: null,
    orderRequest: false,
    orderError: false,
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            }
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                orderError: true,
                orderRequest: false
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                order: action.order
            }
        }
        default: return state
    }
}