import { Routes, Route } from 'react-router-dom'
import SigninPage from '../pages/Signin'
import SignupPage from "../pages/Signup";
import HomePage from "../pages/Home";
import ProtectedRoute from './Protected'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SigninPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes