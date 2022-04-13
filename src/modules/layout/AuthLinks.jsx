/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom'
import MenuButton from "../components/MenuButton";

const AuthLinks = ({ toggleMenu }) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center space-x-3">
      <a
        onClick={() => navigate('/signup')}
        className="cursor-pointer py-2 px-2 font-medium text-blue-900 rounded hover:bg-orange-600 hover:text-white transition duration-300">
        Sign Up
      </a>
      <a
        onClick={() => navigate('/signin')}
        className="cursor-pointer py-2 px-2 font-medium text-white bg-orange-600 rounded hover:bg-orange-600 transition duration-300">
        Sign In
      </a>
      <MenuButton onToggleMenu={toggleMenu} />
    </div>
  );
};

export default AuthLinks