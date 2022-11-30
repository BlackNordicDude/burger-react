import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/actions/user";
import style from '../login/login.module.css'

const LoginPage = ( ) => {
    const dispatch = useDispatch();
    const {values, handleChange} = useForm({email: '', password: ''})
    
    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore: Unreachable code error
        dispatch(login(values));
    }

    return (
        <div className={style.main}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <form className={style.form} onSubmit = {submitForm}>
                <div className="mb-6">
                <Input
                    value={values.email || ''}
                    onChange={handleChange}
                    type={'email'}
                    name='email'
                    placeholder={"E-mail"}
                    />  
                </div>
                <div className="mb-6">
                <Input
                    value={values.password || ''}
                    onChange={handleChange}
                    type={'password'}
                    name='password'
                    placeholder={'Пароль'}
                    />  
                </div>               
                <Button htmlType="submit">Войти</Button>
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
