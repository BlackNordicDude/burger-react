const BURGER_API_URL = 'https:/norma.nomoreparties.space/api';

const checkRes = (res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export const getIngredientsData = () => {
    return fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkRes)
    .then(data => {
        if (data.success) return data.data;
        return Promise.reject(data)
    });
};
