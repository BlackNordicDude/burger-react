import { CHANGE_TAB } from "../actions";

const initialState = {
    currentTab: 'buns'
}

export const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB: {
            return {
                ...state,
                currentTab: action.tab
            }
        }
        default: return state
    }
}