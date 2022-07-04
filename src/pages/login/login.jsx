import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../services/actions/user";
import style from '../login/login.module.css'

const LoginPage = ( ) => {
    const dispatch = useDispatch();
    const [form, setValue] = useState({email: '', password: ''});

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(login(form));
    }

    return (
        <div className={style.main}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <form onSubmit = {submitForm}>
                <div className="mb-6">
                <Input
                    value={form.email}
                    onChange={onChange}
                    type={'email'}
                    name={'email'}
                    placeholder={"E-mail"}
                    />  
                </div>
                <div className="mb-6">
                <Input
                    value={form.password}
                    onChange={onChange}
                    type={'password'}
                    name={'password'}
                    placeholder={'Пароль'}
                    />  
                </div>               
                <Button>Войти</Button>
            </form>
            <div className={`mt-20 text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Вы - новый пользователь</p>
                <Link to='/register'>Зарегистрироваться</Link>
            </div>
            <div className={`mt-4 text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Забыли пароль?</p>
                <Link to='/forgot-password'>Восстановить пароль</Link>
            </div>
        </div>
    )
}

export default LoginPage;


/* настроить хранение access и refresh токенов, 
перекрасить названия ингредиентов, 
починить открытие ингредиента после обновления страницы,
настроить время жизни access токена, 
настроить выход из системы, 
*/