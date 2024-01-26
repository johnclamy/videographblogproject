import Button from "react-bootstrap/Button";
import { MdLogout } from "react-icons/md";

const LogOut = ({ onSetUser }) => (
  <Button
    size="sm"
    variant="light"
    className="d-flex align-items-center gap-2"
    onClick={() => onSetUser('')}
  >
    <span>Log Out</span> <MdLogout />
  </Button>
);

export default LogOut;
