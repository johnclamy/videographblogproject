import { Routes, Route } from 'react-router-dom'
import * as ROUTES from "../routes/constants";
import HomePage from '../pages/Home'
import RoomsPage from '../pages/Rooms'
import SignUpPage from '../pages/Signup'
import SignInPage from '../pages/Signin'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ROOMS} element={<RoomsPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
    </Routes>
  )
}

export default AppRoutes