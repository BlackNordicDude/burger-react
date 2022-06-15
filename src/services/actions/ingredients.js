import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS
} from './index'
import { getIngredients } from '../../utils/burger-api';

export function getIngredientsData() {
    return function(dispatch) {
        dispatch({
            type: LOAD_INGREDIENTS_REQUEST
        })
        getIngredients()
        .then(data => {
            dispatch({
                    type: LOAD_INGREDIENTS_SUCCESS,
                    ingredients: data
                })
        })
        .catch(err =>{
            console.log(err)
            dispatch({type: LOAD_INGREDIENTS_FAILED})})
    }
}
