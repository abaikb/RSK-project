import { Outlet } from 'react-router-dom'
import Header  from '../header /header'
import Footer  from '../footer/footer'
// import Style from './layout.module.css'


export const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
      
      <Footer />
    </>
  )
}