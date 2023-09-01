import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, userIsSignedIn, onToggleSignin }) {
  return (
    <div className="bg-white h-full">
      <Navbar userIsSignedIn={userIsSignedIn} onToggleSignin={onToggleSignin} />
      {children}
      <Footer />
    </div>
  );
}
