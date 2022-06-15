import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from '../reset-password/reset-password.module.css'
import { useState } from "react";

const ResetPassPage = () => {
    const BURGER_API_URL = 'https:/norma.nomoreparties.space/api';
    const [token, setToken] = useState('');
    const [newPass, setNewPass] = useState('');

    const onClick = () => {
        fetch(`${BURGER_API_URL}/password-reset/reset`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({"password": newPass, "token": token})
        })
        .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
        .then(res => {
            if (res && res.success) {
                console.log(res.message)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className={style.main}>
            <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
            <PasswordInput
                onChange={e => setNewPass(e.target.value)}
                value={newPass}
                />
            <div className='mt-6'>
                <Input
                onChange={e => setToken(e.target.value)}
                value={token}
                type='text'
                placeholder="Введите код из письма"
                />
            </div>
            <div className='mt-6 mb-20'>
                <Button onClick={onClick}>
                    Сохранить
                </Button>
            </div>
            <div className={`text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Вспомнили пароль?</p>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    )
}

export default ResetPassPage;