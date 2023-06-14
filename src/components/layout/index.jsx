import { Outlet } from 'react-router-dom'
import Header  from '../header_/header'



export const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
      

    </>
  )
}