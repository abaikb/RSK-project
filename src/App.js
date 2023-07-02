import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about_us";
import { MainPage } from "./pages/main/index";
import RegistrationForm from "./pages/signup/signup";
import Login from "./pages/login/login";
import ChoosePerson from "./pages/person/index";
import ForgotPasswordForm from "./pages/change_password/change";
import CreateTicket from "./pages/create-ticket";
import Ticket from "./pages/ticket/index";
import { Personal } from "./pages/personal cabinet/index";
import AdminLogin from "./pages/admin/login";
import Points from "./pages/service_points";
import { AdminLayout } from "./components/admin/layout";
import { AdminMainPage } from "./pages/admin/main";
import ChangePassword from "./pages/password_edit/password_edit";
import PasswordResetCompleteForm from "./pages/pasword_code/paswordCode";
import Chat from "./components/admin/chat";
import historyTicket from "./pages/history/history";



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
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/reset_password" element={<PasswordResetCompleteForm />} />
            <Route path="/history_ticket" element={<historyTicket />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminMainPage />} />
            <Route path="/admin/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App