import React, {FC} from 'react';
import "./AdminPanelButtons.scss"
import AdminPanelButton from "../AdminPanelButton/AdminPanelButton";
import {IAdminPanelButtons} from "../AdminPanel";

const AdminPanelButtons: FC<IAdminPanelButtons> = (
    {
        buttons
    }) => {
    return (
        <div className="admin-panel-buttons">
            {buttons.map((button) =>
                <AdminPanelButton key={button.id}  id={button.id} to={button.to}>
                    {button.children}
                </AdminPanelButton>
            )}
        </div>
    );
};

export default AdminPanelButtons;