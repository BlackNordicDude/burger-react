import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS,
    PLUS_V,
    MINUS_V,
    RESET_V,
    ADD_MODAL_INGREDIENT,
} from '../actions/index'

const initialState = {
    ingredients: [],
    ingredientsError: false,
    ingredientsRequest: false,
    selectedIngredient: null
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
        case PLUS_V: {
            return {
                ...state,
                ingredients: 
                    state.ingredients.map(el => {
                        if (el._id !== action.id) {
                            return el
                        } else {
                            const v = el.__v
                            return {
                                ...el,
                                __v: v + 1
                            }
                        }
                    })
            }
        }
        case MINUS_V: {
            return {
                ...state,
                ingredients: 
                    state.ingredients.map(el => {
                        if (el._id !== action.id) {
                            return el
                        } else {
                            const v = el.__v
                            return {
                                ...el,
                                __v: v - 1
                            }
                        }
                    })
            }
        }
        case RESET_V: {
            return {
                ...state,
                ingredients: state.ingredients.map(el => {return {...el, __v: 0}})
            }
        }
        case ADD_MODAL_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.payload
            }
        }
        default: return state
    }
}