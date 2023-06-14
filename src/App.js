import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { OrderPage } from "./pages/online_order";
import { MainPage } from "./pages/glavnaya/main";
import RegistrationForm from "./pages/signup/signup";
import "./App.css";

const App = () => {
  return (
    <div className="bank_img">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order/signup" element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
