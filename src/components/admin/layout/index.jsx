import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../header/index.jsx'
import { AdminNav } from '../../../pages/admin/nav/index.jsx'


export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <AdminNav />
      <Outlet />

    </>
  )
}
