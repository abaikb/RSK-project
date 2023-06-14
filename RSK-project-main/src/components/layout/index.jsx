import { Outlet } from 'react-router-dom'
import Header  from '../header_/header'
// import Footer  from '../footer/footer'


export const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
      
      {/* <Footer /> */}
    </>
  )
}