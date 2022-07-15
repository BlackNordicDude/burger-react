import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import style from '../reset-password/reset-password.module.css'
import { resetPassword } from "../../utils/burger-api";
import { useForm } from "../../hooks/useForm";

const ResetPassPage = () => {
    const history = useHistory();
    const {values, handleChange} = useForm({password: '', token: ''})

    const onSubmit = (e) => {
        e.preventDefault();
        resetPassword(values)
        .then(res => {
            console.log(res);
            history.push('/login')
        })
    }
    return (
        <div className={style.main}>
            <form onSubmit={onSubmit}>
                <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
                <Input
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder='Новый пароль'
                    />
                <div className='mt-6'>
                    <Input
                    name="token"
                    onChange={handleChange}
                    value={values.token}
                    type='text'
                    placeholder="Введите код из письма"
                    />
                </div>
                <div className='mt-6 mb-20'>
                    <Button>
                        Сохранить
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

export default ResetPassPage;