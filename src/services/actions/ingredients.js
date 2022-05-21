import {
    LOAD_INGREDIENTS_REQUEST,
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS
} from './index'

const BURGER_API_URL = 'https:/norma.nomoreparties.space/api';

export function getIngredientsData() {
    return function(dispatch) {
        dispatch({
            type: LOAD_INGREDIENTS_REQUEST
        })
        fetch(`${BURGER_API_URL}/ingredients`)
        .then(res => {
            if (res && res.success) {
                dispatch({
                    type: LOAD_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                })
            } else {
                dispatch({type: LOAD_INGREDIENTS_FAILED})
            }
        }).catch(err => dispatch({type: LOAD_INGREDIENTS_FAILED}))
    }
}
