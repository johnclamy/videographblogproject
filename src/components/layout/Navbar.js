import UserAuthDetails from "../../app/users/UserAuthDetails";
import Signin from "../widgets/Signin";

export default function Navbar({ isSignedIn, onToggleSignin }) {
  return (
    <nav className="w-full py-4 bg-cyan-900 drop-shadow-md md:drop-shadow-xl">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <section className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <a className="hover:text-slate-300 hover:no-underline px-4" href="/">
            home
          </a>
          <a className="hover:text-slate-300 hover:no-underline px-4" href="/">
            about
          </a>
        </section>
        {!isSignedIn ? (
          <Signin onSignin={onToggleSignin} />
        ) : (
          <UserAuthDetails onSignOut={onToggleSignin} />
        )}
      </div>
    </nav>
  );
}