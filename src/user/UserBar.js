import Navbar from "react-bootstrap/Navbar";
import Register from "./Register";
import Login from "./Login";
import LogOut from "./LogOut";

const UserBar = ({ user, onSetUser }) => (
  <Navbar.Text style={{ paddingTop: "3px" }}>
    {user ? (
      <p className="d-flex align-items-center gap-3 mb-0 fs-6">
        <span>
          Hello <b>{user}</b>.{" "}
        </span>
        <LogOut onSetUser={onSetUser} />
      </p>
    ) : (
      <span className="d-flex align-items-center gap-3">
        <Register onSetUser={onSetUser} /> <Login onSetUser={onSetUser} />
      </span>
    )}
  </Navbar.Text>
);

export default UserBar;
