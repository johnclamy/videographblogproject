import { useState } from "react";
import AuthButton from "../../components/widgets/AuthButton" 
import UserAuthDetails from "./UserAuthDetails";

export default function UserBar() {
  const [signedIn, setSignedIn] = useState(false);
  const toggleAuth = () => signedIn ? setSignedIn(false) : setSignedIn(true)

  return (
    <div>
      {signedIn ? (
        <UserAuthDetails onToggleAuth={toggleAuth} />
      ) : (
        <AuthButton signedIn={signedIn} onToggleAuth={toggleAuth} />
      )}
    </div>
  );
}