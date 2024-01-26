import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaReacteurope } from "react-icons/fa";
import UserBar from "../user/UserBar";

const Header = ({ user, onSetUser }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          style={{ color: "#CC7722" }}
        >
          <FaReacteurope className="fw-bolder" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <UserBar user={user} onSetUser={onSetUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header