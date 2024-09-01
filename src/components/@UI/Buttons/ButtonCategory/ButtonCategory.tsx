import React, {FC} from 'react';
import "./ButtonCategory.scss"

interface IButtonCategory {
    active: boolean
    children: React.ReactNode
    [key: string]: any
}

const ButtonCategory: FC<IButtonCategory> = (props) => {
    return (
        <button {...props} className={`button-category`}>
          <span className={`button-category__text`}>
            {props.children}
          </span>
          <span className={`button-category__line ${props.active ? "active" : ""}`}></span>
        </button>

    );
};

export default ButtonCategory;