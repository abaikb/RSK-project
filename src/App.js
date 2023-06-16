import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { OrderPage } from "./pages/online_order";
import { MainPage } from "./pages/main/index";
import RegistrationForm from "./pages/signup/signup";
import ChoosePerson from "./pages/person/index"
import Login from "./pages/Login/login";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<MainPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            {/* <Route path="/order" element={<OrderPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/choose-person" element={<ChoosePerson />} />
            <Route path="/order/signup/" element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
