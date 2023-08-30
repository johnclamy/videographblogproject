import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, userIsSignedIn }) {
  const [isSignedIn, setIsSignedIn] = useState(userIsSignedIn);

  return (
    <div className="bg-white h-full">
      <Navbar
        isSignedIn={isSignedIn}
        onToggleSignin={() => setIsSignedIn((prev) => !prev)}
      />
      {children}
      <Footer />
    </div>
  );
}