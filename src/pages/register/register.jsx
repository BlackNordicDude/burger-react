import style from '../register/register.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../services/actions/user'

const RegisterPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = {
        'email': email,
        'password': password,
        'name': name,
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(data)).finally(
            history.push('/login')
        )     
    }
    return (
        <div className={style.main}>
            <p className='text text_type_main-medium'>Регистрация</p>
            <form className={style.form} onSubmit={onSubmit}>
                <div className="mt-6">
                <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Имя'/>
                </div>
                <div className="mt-6">
                <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='E-mail'/> 
                </div>
                <div className="mt-6">
                    <PasswordInput
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mt-6">
                    <Button>Зарегистрироваться</Button>
                </div>
            </form>
            <div className={`mt-20 text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Уже зарегистрированы?</p>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    )
}

export default RegisterPage