import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../auth/authContext';
import MenuButton from './MenuButton'

const SignOutButton = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const { logout } = UserAuth();

  const handleClick = async () => {
    try {
      await logout()
      navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className='flex justify-end'>
      <button onClick={handleClick} className="cursor-pointer mr-3 py-2 px-2 font-medium text-white bg-orange-600 rounded hover:bg-orange-700 transition duration-300">
        Sign Out
      </button>
      <MenuButton onToggleMenu={toggleMenu} />
    </div>
  );
}

export default SignOutButton