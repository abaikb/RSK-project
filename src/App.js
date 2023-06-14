import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { OrderPage } from "./pages/online_order";
import { MainPage } from "./pages/main/index";
import RegistrationForm from "./pages/signup/signup";
import "./App.css";
import Login from "./pages/Login/login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/main" index element={<MainPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
