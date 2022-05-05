import { Routes, Route } from 'react-router-dom'
import SigninPage from '../pages/Signin'
import SignupPage from "../pages/Signup";
import HomePage from "../pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SigninPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
);

export default AppRoutes