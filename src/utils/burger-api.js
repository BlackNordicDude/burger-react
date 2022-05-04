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

export const getOrderNum = (order) => {
    return fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({ingredients: order})
    })
    .then(checkRes)
    .then(data => {
        if (data.success) return data.order.number;
        return Promise.reject(data)
    });
}
/* return fetch(`${BURGER_API_URL}/orders`, {'ingredients' : order})
        .then(checkRes)
        .then(data => {
            if (data.success) return data.order;
            return Promise.reject(data)
        }); */