import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ProfileIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

import style from '../app-header/app-header.module.css';

const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.nav}>
                <Link to="/" className={`mr-2 ${style.link}`}>
                    <BurgerIcon/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Конструктор 
                    </p>
                </Link>
                <Link to="#" className={style.link}>
                    <ListIcon/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Лента заказов
                    </p>
                </Link>
                </div>
            <div className={style.logo}>
                <Logo/>
            </div>
            <Link to="/profile" className={style.link}>
                <ProfileIcon/>
                <p className={`text text_type_main-default ${style.text}`}>
                    Личный кабинет
                </p>
            </Link>
        </header>
    )
}

export default AppHeader;
