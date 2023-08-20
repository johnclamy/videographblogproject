import { useState } from "react";
import Auth from "../../components/widgets/Auth" 
import UserAuthDetails from "./UserAuthDetails";

export default function UserBar() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      {signedIn ? <UserAuthDetails /> : <Auth />}
    </div>
  )
}