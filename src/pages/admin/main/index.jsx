import React from 'react'
import style from './main.module.css'
import mainIcon from '../../../components/admin/img/admin-mainpage-icon.svg'
import { AdminLayout } from '../../../components/admin/layout'

export const AdminMainPage = () => {
    return (
        <div className={style.container}>
            <AdminLayout />
        </div>
    )
}
