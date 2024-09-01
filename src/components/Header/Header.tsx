import {FC} from 'react';
import "./Header.scss"

import image from "../../assets/images/index"
import Container from "../@UI/Container/Container";
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

export interface IHeaderMenuItem {
    id: number
    to: string
    name: string
}

const headerMenuItems: IHeaderMenuItem[] = [
    {
        id: 1,
        to: "/",
        name: "🏆 Курсы"
    },
    {
        id: 2,
        to: "/",
        name: "🧩 Квизы"
    },
    {
        id: 3,
        to: "/profile",
        name: "👤 Профиль | 100 XP️"
    },
    {
        id: 4,
        to: "/admin_panel",
        name: "📚 Создать курсы и квизы"
    },
]


interface IHeader {
    activeBurger: boolean,
    setActiveBurger: (arg: boolean) => void
}

const Header: FC<IHeader> = ({ activeBurger, setActiveBurger }) => {

    return (
        <header className="header">
            <Container>

                <div className="header__top">

                    <HeaderBurger
                        setActiveBurger={setActiveBurger}
                        activeBurger={activeBurger}
                    />

                    <HeaderLogo image={image.logo} />

                </div>

                <div className="header__bottom">

                    <HeaderMenu
                        headerMenuItems={headerMenuItems}
                        activeBurger={activeBurger}
                        setActiveBurger={setActiveBurger}
                    />

                </div>

            </Container>
        </header>
    );
};

export default Header;