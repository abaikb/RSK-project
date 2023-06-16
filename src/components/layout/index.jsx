import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Market from '../market/index'

export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

    </>
  )
}
