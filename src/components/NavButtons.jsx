import Button from "react-bootstrap/Button";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <Button variant="outline-secondary">Sign Up</Button>
      <Button className='ms-3' variant="outline-dark">Sign In</Button>
    </div>
  );
};

export default NavButtons;
