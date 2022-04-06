import { Link, useNavigate } from 'react-router-dom';
import { signUserOut } from '../auth'
import SigninIcon from './SigninIcon';
import SignOutIcon from './SignOutIcon'

const Header = ({ signedIn, onToggleSignIn }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (signedIn) {
      signUserOut()
    }
    onToggleSignIn();
    navigate("/");
  };

  const authIcon = signedIn ? (
    <button type='button' onClick={handleClick}>
      <SignOutIcon />
    </button>
  ) : (
    <Link to="/signin">
      <SigninIcon />
    </Link>
  );
  return (
    <header className="bg-teal-100 p-4 flex items-center">
      <h1 className="text-gray-900 font-mono text-4xl tracking-wide text-center capitalize flex-1">
        <Link to="/">my todos</Link>
      </h1>
      {authIcon}
    </header>
  );
};

export default Header