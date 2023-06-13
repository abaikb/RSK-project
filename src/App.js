import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout';
import { AboutPage } from './pages/about_us';
import { OrderPage } from './pages/online_order';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout />}>
          <Route path='/about_us' element={<AboutPage />} />
          <Route path='/order' element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
