import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignUp from '../auth/SignUp'
import Login from '../auth/Login'
import Logout from '../auth/Logout'

const UserBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState('')

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const renderUser = user ? (
    <Logout user={user} />
  ) : (
    <>
      <Button
        type="button"
        variant="link"
        className="btn btn-link text-decoration-none"
        onClick={handleShowSignUp}
      >
        SIGN UP
      </Button>{" "}
      <Button
        type="button"
        variant="link"
        className="btn btn-link text-decoration-none"
        onClick={handleShowLogin}
      >
        LOGIN
      </Button>
    </>
  ); 
 
  return (
    <>
      <section className="d-flex">{renderUser}</section>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onClose={handleCloseLogin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp onClose={handleCloseSignUp} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserBar
