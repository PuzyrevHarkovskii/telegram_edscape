import {FC} from 'react';
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import {IHeaderMenuItem} from "../../Header";
import "./HeaderMenuList.scss"

export interface IHeaderMenuList {
    headerMenuItems: IHeaderMenuItem[]
    activeBurger: boolean
    setActiveBurger: (arg: boolean) => void
}

const HeaderMenuList: FC<IHeaderMenuList> = (
    {
        headerMenuItems,
        activeBurger,
        setActiveBurger
    }
    ) => {
    return (
        <div className={activeBurger ? "header-menu active" : "header-menu"}>
            {headerMenuItems.map(obj =>
                <HeaderMenuItem
                    key={obj.id}
                    to={obj.to}
                    name={obj.name}
                    setActiveBurger={setActiveBurger}
                />
            )}
        </div>
    );
};

export default HeaderMenuList;