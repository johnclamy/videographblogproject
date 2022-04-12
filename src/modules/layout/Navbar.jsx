import AuthLinks from "./AuthLinks";
import TodoLinks from './TodoLinks';
import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <section className="flex justify-between items-center">
          <section className="flex space-x-7 items-center">
            <Logo />
            <TodoLinks />
          </section>
          <AuthLinks />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
