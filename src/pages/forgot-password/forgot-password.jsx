import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { forgotPassword } from '../../utils/burger-api';
import style from '../forgot-password/forgot-password.module.css';

const ForgotPassPage = ( ) => {
    const [email, setEmail] = useState('')
    const history = useHistory();

    const onClick = () => {
       forgotPassword({email: email})
       .then(res => {
        if (res.success === true) {
            history.push('/reset-password');
           } else {
            setEmail('');
           }
       })
    }

    return (
        <div className={style.main}>
            <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
            <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder='Укажите e-mail'/>
            <div className='mt-6'>
                <Button onClick={onClick}>
                    Восстановить
                </Button>
            </div>
            <div className={`text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Вспомнили пароль?</p>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    )
}

export default ForgotPassPage;