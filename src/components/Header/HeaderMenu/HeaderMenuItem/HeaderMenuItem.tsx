import {FC} from 'react';
import {Link} from "react-router-dom";
import "./HeaderMenuItem.scss"

interface IHeaderMenuItem {
    to: string
    name: string,
    setActiveBurger: (arg: boolean) => void
}

const HeaderMenuItem: FC<IHeaderMenuItem> = (
    {
        to,
        name,
        setActiveBurger
    }) => {
    return (
        <Link
            to={to}
            onClick={() => setActiveBurger(false)}
            className="Link header-menu-item">
            {/*<img*/}
            {/*    className="header-menu-item__img"*/}
            {/*    src={image}*/}
            {/*    alt="image HeaderMenuItem"*/}
            {/*/>*/}
            {name}
        </Link>
    );
};

export default HeaderMenuItem;