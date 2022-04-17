import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ProfileIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from '../app-header/app-header.module.css';

const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.nav}>
                <a href="#" className={`mr-2 ${style.link}`}>
                    <BurgerIcon/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Конструктор 
                    </p>
                </a>
                <a href="#" className={style.link}>
                    <ListIcon/>
                    <p className={`text text_type_main-default ${style.text}`}>
                        Лента заказов
                    </p>
                </a>
                </div>
            <div className={style.logo}>
                <Logo/>
            </div>
            <a href="#" className={style.link}>
                <ProfileIcon/>
                <p className={`text text_type_main-default ${style.text}`}>
                    Личный кабинет
                </p>
            </a>
        </header>
    )
}

export default AppHeader;
