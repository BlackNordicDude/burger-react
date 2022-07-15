import { NavLink } from "react-router-dom";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../profile/profile.module.css'
import { updateUserData, logoutUser } from "../../services/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const {nameR, emailR} = useSelector(store => ({
        nameR: store.user.data.name,
        emailR: store.user.data.email
    }))

    let pass = '*********'

    const {values, handleChange, setValues} = useForm({name: nameR, pass: pass, email: emailR})

    const cancelChange = () => {
        setValues({
            name: nameR,
            email: emailR,
            pass: pass
        })
    }

    useEffect(() => {
        setValues({
            name: nameR,
            email: emailR,
            pass: pass
        })
    }, [nameR, emailR, pass, setValues])

    const update = () => {
        console.log('update', values);

        dispatch(updateUserData(values))
    } 

    const logout = () => {
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
            <form className={style.inputs}>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                    type="text"
                    placeholder='имя'
                    icon="EditIcon"/>
                </div>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={values.email}
                    name='email'
                    onChange={handleChange}
                    type="email"
                    placeholder="login"
                    icon="EditIcon"/>
                </div>
                <div className={style.tab}>
                    <Input
                    value={values.pass}
                    name='pass'
                    onChange={handleChange}
                    type="password"
                    placeholder="pass"
                    icon="EditIcon"/> 
                </div>
                <div className={`mt-6 ${style.buttons}`}>
                    <Button 
                        onClick={cancelChange}
                        type="secondary">
                        Отмена
                    </Button>
                    <Button onClick={update}>Сохранить</Button>
                </div>
            </form>
        </div>
    )
}

export default ProfilePage;