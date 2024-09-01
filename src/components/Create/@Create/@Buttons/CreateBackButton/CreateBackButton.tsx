import React, {FC} from 'react';
import "./CreateBackButton.scss"
import {Link} from "react-router-dom";
import Arrow from "../../../../@UI/Icons/Arrow/Arrow";

interface ICreateBackButton {
    children: React.ReactNode
}

const CreateBackButton: FC<ICreateBackButton> = (
    {
        children
    }) => {
    return (
        <Link to={"/admin_panel"} className="Link create-back">
            <Arrow
                fill={"white"}
                direction={"left"}
            />
            <div className="create-back__text">
                {children}
            </div>
        </Link>
    );
};

export default CreateBackButton;