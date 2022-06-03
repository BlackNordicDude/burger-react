import { constructorReducer } from './constructor';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { tabReducer } from './tab';
import { modalReducer } from './modal';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    constructorState: constructorReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    tab: tabReducer,
    modal: modalReducer,
})