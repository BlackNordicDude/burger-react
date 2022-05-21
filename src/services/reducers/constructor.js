import {
    ADD_BUN,
    ADD_INNER,
    CALC_COST,
} from '../actions/index';

const initialState = {
    constructorIngredient: {
        bun: {},
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
        case CALC_COST: {
            return {
                ...state,
                totalCost: state.totalCost += action.payload
            }
        }
        default: return state
    }
} 