import React, { FC } from 'react'
import "./AdminPanelBlock.scss"

interface IAdminPanelBlock {
    children: React.ReactNode
}

const AdminPanelBlock: FC<IAdminPanelBlock> = (
    {
        children
    }) => {
    return (
        <div className="admin-panel-block">
            {children}
        </div>
    )
}

export default AdminPanelBlock