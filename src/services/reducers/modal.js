import { ADD_MODAL_INGREDIENT, CLOSE_MODAL, OPEN_MODAL, REMOVE_MODAL_INGREDIENT } from "../actions";

const initialState = {
    isModalOpen: false,
    selectedIngredient: null,
}
export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalOpen: false
            }
        }
        case OPEN_MODAL: {
            return {
                ...state,
                isModalOpen: true
            }
        }
        case REMOVE_MODAL_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null
            }
        }
        case ADD_MODAL_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.selectedIngredient
            }
        }
        default: return state
    }
}