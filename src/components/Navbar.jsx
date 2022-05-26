import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'
import NavButtons from './NavButtons'
import Slider from './Slider'

const Navbar = () => {
  const [showSlider, setShowSlider] = useState(false)

  return (
    <Container>
      <Row>
        <Col>
          <nav className="navbar">
            <Logo />
            <NavLinks />
            <NavButtons />
            <MenuButton onMenuClick={() => setShowSlider(!showSlider)} />
          </nav>
          {showSlider && <Slider />}
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar