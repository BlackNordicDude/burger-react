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
 import { 
    loginUser,
    registerUser,
    getUser,
    updateUser,
    logout,
 } from "../../utils/burger-api";
import { deleteCookie, getCookie } from "../../utils/cookie";

export function checkUserAuth() {
    return function(dispatch) {
        if (getCookie('accessToken')) {
            getUser()
            .finally(() => {
                console.log('authTrue');
                dispatch({type: AUTH_CHECKED});
            })
        } else {
            dispatch({type: AUTH_CHECKED});
        }
        
        dispatch({type: AUTH_CHECKED})
    }
}

export function login(data) {
    return function(dispatch) {
        dispatch({type: LOGIN_USER_REQUEST})
        loginUser(data)
        .then(data => {
            dispatch({
                type: LOGIN_USER_SUCCESS, 
                payload: data.user
            })
        })
        .catch(err => dispatch({
            type: LOGIN_USER_ERROR
        }))
    }
}

export function register(data) {
    return function(dispatch) {
        dispatch({type: REGISTER_USER_REQUEST})
        registerUser(data)
        .then(data => {
            console.log(data);
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data.user
            })
        }).catch(err => dispatch({
            type: REGISTER_USER_ERROR
        }))
    }
}

export function getUserData() {
    return function(dispatch) {
        console.log('getUserData');
        dispatch({type: GET_USER_REQUEST})
        getUser()
        .then(data => {
            console.log(data);
            dispatch({
                type: GET_USER_SUCCESS,
                payload: data.user
            })
        }).catch(err => dispatch({type: GET_USER_ERROR}))
    }
}

export function updateUserData(user) {
    return function(dispatch) {
        console.log('updateUserData');
        dispatch({type: UPDATE_USER_REQUEST})
        updateUser(user)
        .then(data => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: data.user
            })
        }).catch(err => dispatch({type: UPDATE_USER_ERROR}))
    }
}

export function logoutUser() {
    return function(dispatch) {
        logout()
        .then(() => {
            dispatch({type: USER_LOGOUT});
            deleteCookie('accessToken');
            localStorage.clear();
        })
        .catch(err => console.log(err))
    }
}