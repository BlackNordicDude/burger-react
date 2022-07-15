import { 
    AUTH_CHECKED,
    USER_LOGOUT,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
 } from "../actions";

const initialState = {
    isAuthChecked: false,

    data: null,

    registerUserError: false,
    registerUserRequest: false,

    loginUserError: false,
    loginUserRequest: false,

    updateUserError: false, 
    updateUserRequest: false,

    getUserError: false,
    getUserReuqest: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHECKED: {
            return {
                ...state,
                isAuthChecked: true,
            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                data: null
            }
        }
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                registerUserRequest: true,
                registerUserError: false
            }
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                registerUserRequest: false,
                data: action.payload,
                isAuthChecked: true
            }
        }
        case REGISTER_USER_ERROR: {
            return {
                ...state,
                registerUserRequest: false,
                registerUserError: true
            }
        }
        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                loginUserRequest: true,
                loginUserError: false
            }
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loginUserRequest: false,
                isAuthChecked: true
            }
        }
        case LOGIN_USER_ERROR: {
            return {
                ...state,
                loginUserRequest: false,
                loginUserError: action.err
            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserReuqest: true,
                getUserError: false,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserReuqest: false,
                data: action.payload,
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                getUserReuqest: false,
                getUserError: true
            }
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateUserRequest: true,
                updateUserError: false,
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateUserRequest: false,
                data: action.payload
            }
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                updateUserRequest: false,
                updateUserError: true,
            }
        }
        default: return state
    }
}
