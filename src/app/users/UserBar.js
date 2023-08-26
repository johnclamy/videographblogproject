import { useState } from "react"
import AuthButton from "../../components/widgets/AuthButton";
import AuthModal from "../../components/widgets/AuthModal";
import UserAuthDetails from "./UserAuthDetails";
import RegisterForm from "./RegisterForm";
import SigninForm from "./SigninForm";

export default function UseBar() {
  const [register, setRegister] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleAuthForm = () => setRegister(!register)

  return (
    <section className="mx-3 mt-2">
      {!signedIn ? (
        <AuthButton showModal={showModal} onSetShowModal={setShowModal} />
      ) : (
        <UserAuthDetails onSignOut={() => setSignedIn(false)} />
      )}
      <AuthModal isVisible={showModal} onSetShowModal={setShowModal}>
        {register ? (
          <RegisterForm onToggle={toggleAuthForm} />
        ) : (
          <SigninForm onToggle={toggleAuthForm} />
        )}
      </AuthModal>
    </section>
  );
}