import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Nav, Navbar } from "react-bootstrap";
import LogOut from "../auth/LogOut";
import LoginLink from "../auth/LoginLink";
import SignUpLink from '../auth/SignUpLink';
import ToggleThemeButton from './ToggleThemeButton'

function Authbar({ user, dispatch }) {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Navbar bg={theme.bg} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Blogster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          {user.email ? (
            <LogOut email={user.email} dispatch={dispatch} />
          ) : (
            <>
              <ToggleThemeButton />{" "}
              <LoginLink dispatch={dispatch} />{" "}
              <SignUpLink dispatch={dispatch} />
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Authbar;
