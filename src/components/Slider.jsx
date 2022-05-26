import Button from "react-bootstrap/Button";

const Slider = () => {
  return (
    <nav className="slider slider-links">
      <a href="/home">Home</a>
      <a href="/rooms">Rooms</a>
      <Button style={{width: '100px'}} className='mt-2' size="sm" variant="secondary">
        Sign Up
      </Button>
      <Button style={{width: '100px'}} className='mt-4' size="sm" variant="dark">
        Sign In
      </Button>
    </nav>
  );
}

export default Slider