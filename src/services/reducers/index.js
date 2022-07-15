import { constructorReducer } from './constructor';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { tabReducer } from './tab';
import { userReducer } from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    constructorState: constructorReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    tab: tabReducer,
    user: userReducer,
})