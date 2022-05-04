export const reducer = (state, action) => {
    switch (action.type) {
        case 'setIngredients': 
        return {
            ...state,
            ingredients: action.payload
        }
        case 'endLoad':
        return {
            ...state,
            loading: false
        }
        case 'error': 
        return {
            ...state,
            error: true
        }
        case 'setOrder': 
        return {
            ...state,
            order: action.payload
        }
        case 'selectIngredient': 
        return {
            ...state,
            selectedIngredient: action.payload
        }
        case 'addBun': {
            return {
                ...state,
                constructorIngredient: {
                    ...state.constructorIngredient,
                    bun: [action.payload],
                }
            }
        }
        case 'addInner': 
        return {
            ...state,
            constructorIngredient: {
                ...state.constructorIngredient,
                inner: [...state.constructorIngredient.inner, action.payload]
            }
        }
        case 'calcCost':
        return {
            ...state,
            totalCost: state.totalCost += action.payload
        }
        case 'closeIngrModal': 
        return {
            ...state,
            selectedIngredient: null
        }
        case 'closeOrderModal': 
        return {
            ...state, 
            order: null
        }
        default: return state
    }
}
