import {FC} from 'react';
import "./HeaderBurger.scss"

interface IHeaderBurger {
    activeBurger: boolean,
    setActiveBurger: (arg: boolean) => void
}

const HeaderBurger: FC<IHeaderBurger> = ({ activeBurger, setActiveBurger }) => {
    return (
        <div className="header-burger__wrapper">
            <div
                onClick={() => setActiveBurger(!activeBurger)}
                className={activeBurger ? "header-burger active" : "header-burger"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default HeaderBurger;