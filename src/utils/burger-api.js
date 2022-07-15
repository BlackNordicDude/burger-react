import { getCookie, setCookie } from "./cookie";

const BURGER_API_URL = 'https:/norma.nomoreparties.space/api';

const checkRes = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

const checkSuccess = (data) => {
    return data.success ? data : Promise.reject(data)
} 

export const refreshToken = () => {
    return fetch(`${BURGER_API_URL}/auth/token`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkRes)
}

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkRes(res)
    } catch (err) {
        if (err.message === 'jwt expired') {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                Promise.reject(refreshData)
            }
            console.log('fetchWithRefresh');
            localStorage.setItem('refreshToken', refreshData.refreshToken);
            setCookie('accessToken', refreshData.accessToken, {expires: 1200});
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkRes(res);
        } else {
            return Promise.reject(err);
        }
    }
}

export const getIngredients = () => {
    console.log('getIngred');
    return fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkRes)
    .then(checkSuccess)
    .then(data => data.data)
}

export const getOrder = (data) => {
    return fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            authorization: getCookie('accessToken')
        },
        body:  JSON.stringify({ingredients: data})
    })
    .then(checkRes)
    .then(checkSuccess)
}

export const registerUser = data => {
    return fetch(`${BURGER_API_URL}/auth/register`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    .then(checkRes)
    .then(checkSuccess)
    .then((data) => {
        localStorage.setItem('refreshToken', data.refreshToken);
        setCookie('accessToken', data.accessToken, {expires: 1200});
    })  
}

export const loginUser = data => {
    return fetch(`${BURGER_API_URL}/auth/login`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    .then(checkRes)
    .then(checkSuccess)
    .then((data) => {
        localStorage.setItem('refreshToken', data.refreshToken);
        setCookie('accessToken', data.accessToken, {expires: 1200});
        return data
    })  
}

export const forgotPassword = data => {
    return fetch(`${BURGER_API_URL}/password-reset`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    .then(checkRes)
    .then(checkSuccess)
}

export const resetPassword = data => {
    return fetch(`${BURGER_API_URL}/password-reset/reset`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    .then(checkRes)
    .then(checkSuccess)
}

export const getUser = () => {
    console.log('getUser');
    return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            authorization: getCookie('accessToken')
        },
    })
}

export const updateUser = (user) => {
    return fetchWithRefresh(`${BURGER_API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: getCookie('accessToken')
        },
        body: JSON.stringify(user)
    }) 
}

export const logout = () => {
    return fetch(`${BURGER_API_URL}/auth/logout`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkRes)
}