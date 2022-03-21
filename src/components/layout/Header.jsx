import Signin from './Signin'

const Header = () => (
  <header className="bg-teal-100 p-4 flex">
    <h1 className="text-gray-900 font-mono text-4xl tracking-wide text-center capitalize flex-1">
      my todos
    </h1>
    <Signin />
  </header>
);

export default Header