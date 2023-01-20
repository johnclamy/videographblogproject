import Button from 'react-bootstrap/Button'
import { logout } from "../redux/action"

const Logout = ({ user, dispatch }) => {
  return (
    <section>
      <b className="fs-6 fst-italic">
        <span className="fw-normal">Logged in as:</span> {user}{" "}
      </b>
      <Button variant="secondary" onClick={() => dispatch(logout())}>Logout</Button>
    </section>
  );
}

export default Logout
