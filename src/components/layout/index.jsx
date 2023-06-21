import { Outlet } from 'react-router-dom'
import Header from '../header/header'


export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

    </>
  )
}
