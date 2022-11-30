import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ProfileIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";

import style from '../app-header/app-header.module.css';

const AppHeader:FC = () => {

    const isConst = !!useRouteMatch({path: '/', exact: true})
    const isFeed = !!useRouteMatch('/feed')
    const isProfile = !!useRouteMatch('/profile')
  // @ts-ignore: Unreachable code error
    const username = useSelector((store) => store.user.data?.name) 

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <NavLink 
                to="/" 
                className={`mr-2 ${style.link}`}
                activeClassName={style.link_active}
                >
                    <BurgerIcon type={isConst ? 'primary' : 'secondary'}/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Конструктор 
                    </p>
                </NavLink>
                <NavLink 
                to="/feed" 
                className={style.link}
                activeClassName={style.link_active}
                >
                    <ListIcon type={isFeed ? 'primary' : 'secondary'}/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Лента заказов
                    </p>
                </NavLink>
                </div>
            <div className={style.logo}>
                <NavLink to='/'>
                    <Logo/>
                </NavLink>
            </div>
            <NavLink 
            to="/profile" 
            className={style.link}
            activeClassName={style.link_active}
            >
                <ProfileIcon type={isProfile ? 'primary' : 'secondary'}/>
                <p className={`text text_type_main-default ${style.text}`}>
                    {username ? username : 'Личный кабинет'}
                </p>
            </NavLink>
        </header>
    )
}

export default AppHeader;
