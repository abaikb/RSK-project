import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { MainPage } from "./pages/main/index";
import RegistrationForm from "./pages/signup/signup";
import Login from "./pages/login/login";
import ChoosePerson from "./pages/person/index"
import ForgotPasswordForm from "./pages/change_password/change";
import CreateTicket from "./pages/create-ticket";
import Ticket from "./pages/ticket";
import { Personal } from "./pages/personal cabinet/index";
import Points from "./pages/service_points";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<MainPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/" element={<RegistrationForm />} />
            <Route path="/forgot_password" element={<ForgotPasswordForm />} />
            <Route path="/choose-person" element={<ChoosePerson />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/points" element={<Points />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App
