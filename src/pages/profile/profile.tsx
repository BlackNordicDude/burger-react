import { NavLink } from "react-router-dom";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../profile/profile.module.css'
import { updateUserData, logoutUser } from "../../services/actions/user";
import { FC, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

const ProfilePage: FC = () => {
    const dispatch = useDispatch();

    const {nameR, emailR} = useSelector(store => ({
        // @ts-ignore: Unreachable code error
        nameR: store.user.data.name,
        // @ts-ignore: Unreachable code error
        emailR: store.user.data.email
    }))

    let pass = '*********'

    const {values, handleChange, setValues} = useForm({name: nameR, password: pass, email: emailR})

    const cancelChange = () => {
        setValues({
            name: nameR,
            email: emailR,
            password: pass
        })
    }

    useEffect(() => {
        setValues({
            name: nameR,
            email: emailR,
            password: pass
        })
    }, [nameR, emailR, pass, setValues])

    const update = (e: FormEvent) => {
        e.preventDefault();
        console.log('update', values);
    // @ts-ignore: Unreachable code error
        dispatch(updateUserData(values))
    } 

    const logout = () => {
    // @ts-ignore: Unreachable code error
        dispatch(logoutUser());
    }

    return (
        <div className={style.main}>
            <div className={`mr-15 ${style.nav}`}>
                <div >
                    <NavLink 
                        to='/profile'
                        className={`text text_type_main-medium ${style.link}`}
                        activeClassName={style.active_link}>
                        Профиль
                    </NavLink> 
                </div>
                <div >
                    <NavLink 
                        to='/profile/orders'
                        className={`text text_type_main-medium ${style.link}`}
                        activeClassName={style.active_link}>
                        История заказов
                    </NavLink>
                </div>
                <div onClick={logout} >
                    <NavLink 
                        to='/login'
                        className={`text text_type_main-medium ${style.link}`}
                        activeClassName={style.active_link}>
                        Выход
                    </NavLink> 
                </div>
                <p className="text text_type_main-small text_color_inactive mt-20">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={style.inputs} onSubmit={update}>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={values.name || ''}
                    name='name'
                    onChange={handleChange}
                    type="text"
                    placeholder='имя'
                    icon="EditIcon"/>
                </div>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={values.email || ''}
                    name='email'
                    onChange={handleChange}
                    type="email"
                    placeholder="login"
                    icon="EditIcon"/>
                </div>
                <div className={style.tab}>
                    <Input
                    value={values.password || ''}
                    name='password'
                    onChange={handleChange}
                    type="password"
                    placeholder="pass"
                    icon="EditIcon"/> 
                </div>
                <div className={`mt-6 ${style.buttons}`}>
                    <Button 
                        onClick={cancelChange}
                        type="secondary"
                        htmlType="reset">
                        Отмена
                    </Button>
                    <Button htmlType="submit">Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default ProfilePage;