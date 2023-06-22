import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { MainPage } from "./pages/main/index";
import RegistrationForm from "./pages/signup/signup";
import Login from "./pages/Login/login";
import ChoosePerson from "./pages/person/index"
import ForgotPasswordForm from "./pages/change_password/change";
import CreateTicket from "./pages/create-ticket";
import Ticket from "./pages/ticket";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<MainPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/signup/" element={<RegistrationForm />} />
            <Route path="/forgot_password" element={<ForgotPasswordForm />} />
            <Route path="login/choose-person" element={<ChoosePerson />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/ticket" element={<Ticket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App
