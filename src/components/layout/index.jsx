import { Outlet } from 'react-router-dom'
<<<<<<< HEAD:src/components/layout/index.jsx
import Header  from '../header /header'
import Market  from '../market/index'
import Footer  from '../footer/footer'
=======
import Header from '../header_/header'
// import Footer  from '../footer/footer'
>>>>>>> 102c1e29897bd9c097461732a5db46444e1fb770:RSK-project-main/src/components/layout/index.jsx


export const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
      
<<<<<<< HEAD:src/components/layout/index.jsx
      <Market />

      <Footer />
=======
      {/* <Footer /> */}
>>>>>>> 102c1e29897bd9c097461732a5db46444e1fb770:RSK-project-main/src/components/layout/index.jsx
    </>
  )
}