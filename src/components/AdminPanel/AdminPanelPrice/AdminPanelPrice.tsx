import React from 'react'
import "./AdminPanelPrice.scss"
import AdminPanelBlock from '../AdminPanelBlock/AdminPanelBlock';

const AdminPanelPrice = () => {
    return (
        <AdminPanelBlock>
            <div className="admin-panel-price__item">
                499 ₽ в месяц
            </div>
            <div className="admin-panel-price__item">
                1299 ₽ за 3 месяца
            </div>
            <div className="admin-panel-price__item">
                3899 ₽ в год
            </div>
        </AdminPanelBlock>
    )
}

export default AdminPanelPrice;