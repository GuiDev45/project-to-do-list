import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const LostPassword = lazy(() => import("../pages/LostPassword"));

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lost-password" element={<LostPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
