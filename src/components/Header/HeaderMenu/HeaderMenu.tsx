import {FC} from 'react';
import "./HeaderMenu.scss"
import HeaderMenuList, {IHeaderMenuList} from "./HeaderMenuList/HeaderMenuList";

const HeaderMenu: FC<IHeaderMenuList> = (
    {
        headerMenuItems,
        activeBurger,
        setActiveBurger,
    }) => {
    return (
        <HeaderMenuList
            headerMenuItems={headerMenuItems}
            activeBurger={activeBurger}
            setActiveBurger={setActiveBurger}
        />
    );
};

export default HeaderMenu;