import { useState } from 'react'
import AuthLinks from "./AuthLinks";
import TodoLinks from './TodoLinks';
import TodoDropdownLinks from './TodoDropdownLinks';
import Logo from "../components/Logo";

const Navbar = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const toggleMenu = () => setShowDropdownMenu(!showDropdownMenu)

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <section className="flex justify-between items-center">
            <section className="flex space-x-7 items-center">
              <Logo />
              <TodoLinks />
            </section>
            <AuthLinks toggleMenu={toggleMenu} />
          </section>
        </div>
      </nav>
      {showDropdownMenu && <TodoDropdownLinks />}
    </>
  );
};

export default Navbar;
