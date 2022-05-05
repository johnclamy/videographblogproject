import { Container, Navbar } from "react-bootstrap";
import AuthButton from './AuthButton'

const NavigationBar = () => (
  <Navbar>
    <Container>
      <Navbar.Brand className="text-uppercase" href="#home">
        my todos
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <AuthButton />
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavigationBar;
