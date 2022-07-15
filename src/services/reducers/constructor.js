import {
    ADD_BUN,
    ADD_INNER,
    PLUS_COST,
    MINUS_COST,
    REMOVE_INNER,
    RESET_BUN_COST,
    SORT_INGREDIENTS,
    RESET_CONSRUCTOR
} from '../actions/index';

const initialState = {
    constructorIngredient: {
        bun: null,
        inner: []
    },
    totalCost: 0
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUN: {
            return {
                ...state,
                constructorIngredient: {
                    ...state.constructorIngredient,
                    bun: action.payload,
                }
            }
        }
        case ADD_INNER: {
            return {
                ...state,
                constructorIngredient: {
                    ...state.constructorIngredient,
                    inner: [...state.constructorIngredient.inner, action.payload]
                }
            }
        }
        case PLUS_COST: {
            return {
                ...state,
                totalCost: state.totalCost += action.payload
            }
        }
        case MINUS_COST: {
            return {
                ...state,
                totalCost: state.totalCost -= action.payload
            }
        }
        case RESET_BUN_COST: {
            return {
                ...state,
                totalCost: state.totalCost -= state.constructorIngredient.bun.price*2
            }
        }
        case REMOVE_INNER: {
            return {
                ...state,
                constructorIngredient: {
                    ...state.constructorIngredient,
                    inner: [...state.constructorIngredient.inner.filter(el => el.uid !== action.payload.uid)]
                }
            }
        }
        case SORT_INGREDIENTS: {
            return {
                ...state,
                constructorIngredient: {
                    ...state.constructorIngredient,
                    inner: [...action.payload]
                }
            }
        }
        case RESET_CONSRUCTOR: {
            return {
                ...state,
                totalCost: 0,
                constructorIngredient: {
                    bun: null,
                    inner: []
                }
            }
        }
        default: return state
    }
} 