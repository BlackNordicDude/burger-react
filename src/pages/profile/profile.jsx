import { NavLink } from "react-router-dom";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../profile/profile.module.css'
import { getUserData, updateUserData, logoutUser } from "../../services/actions/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
        
    },[dispatch])

    const {nameR, emailR} = useSelector(store => ({
        nameR: store.user.data.name,
        emailR: store.user.data.email
    }))

    const [userData, setUserData] = useState({
        name: nameR,
        email: emailR,
    })

    useEffect(() => {
        setUserData({
            name: nameR,
            email: emailR,
        })
    }, [nameR, emailR, userData.pass])

    const update = () => {
        console.log('update', userData);

        dispatch(updateUserData(userData))
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
            <div className={style.inputs}>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={userData.name}
                    onChange={e => setUserData({
                        ...userData,
                        name: e.target.value
                    })}
                    type="text"
                    placeholder='имя'
                    icon="EditIcon"/>
                </div>
                <div className={`mb-6 ${style.tab}`}>
                    <Input
                    value={userData.email}
                    onChange={e => setUserData({
                        ...userData,
                        email: e.target.value
                    })}
                    type="email"
                    placeholder="login"
                    icon="EditIcon"/>
                </div>
                <div className={style.tab}>
                    <Input
                    value={'********'}
                    type="password"
                    placeholder="pass"
                    icon="EditIcon"/> 
                </div>
                <div className={`mt-6 ${style.buttons}`}>
                    <Button 
                
                        type="secondary">
                        Отмена
                    </Button>
                    <Button onClick={update}>Сохранить</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;