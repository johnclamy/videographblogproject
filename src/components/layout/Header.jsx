import { Link } from 'react-router-dom';
import SigninIcon from './SigninIcon';

const Header = () => (
  <header className="bg-teal-100 p-4 flex">
    <h1 className="text-gray-900 font-mono text-4xl tracking-wide text-center capitalize flex-1">
      <Link to="/">my todos</Link>
    </h1>
    <Link to="/signin">
      <SigninIcon />
    </Link>
  </header>
);

export default Header