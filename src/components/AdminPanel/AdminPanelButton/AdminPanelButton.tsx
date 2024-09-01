import React, {FC} from 'react';
import "./AdminPanelButton.scss"
import {Link} from "react-router-dom";
import Arrow from "../../@UI/Icons/Arrow/Arrow";
import {IAdminPanelButton} from "../AdminPanel";

const AdminPanelButton: FC<IAdminPanelButton> = (
    {
        to,
        children
    }) => {
    return (
        <Link to={"/admin_panel" + to}
              className="Link admin-panel-button">
            <div className="admin-panel-button__text">
                {children}
            </div>
            <Arrow
                fill={"white"}
                direction={"right"}
            />
        </Link>
    );
};

export default AdminPanelButton;