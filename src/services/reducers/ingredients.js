import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS
} from '../actions/index'

const initialState = {
    ingredients: [],
    ingredientsError: false,
    ingredientsRequest: false
}

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            }
        }
        case LOAD_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsError: true,
                ingredientsRequest: false
            }
        }
        case LOAD_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredients: action.ingredients
            }
        }
        default: return state
    }
}