import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { forgotPassword } from '../../utils/burger-api';
import style from '../forgot-password/forgot-password.module.css';

const ForgotPassPage = ( ) => {

    const history = useHistory();
    const {values, handleChange, setValues} = useForm({email: ''})

    const onSubmit = (e) => {
        e.preventDefault();
       forgotPassword(values)
       .then(res => {
        if (res.success === true) {
            history.push('/reset-password');
           } else {
            setValues({email: ''});
           }
       })
    }

    return (
        <div className={style.main}>
            <form className={style.form} onSubmit={onSubmit}>
                <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
                <Input
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Укажите e-mail'/>
                <div className='mt-6'>
                    <Button>
                        Восстановить
                    </Button>
                </div>
            </form>
            <div className={`text text_type_main-default text_color_inactive ${style.extra}`}>
                <p className={style.text}>Вспомнили пароль?</p>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    )
}

export default ForgotPassPage;