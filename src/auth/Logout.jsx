import Button from 'react-bootstrap/Button'

const Logout = ({ user }) => {
  return (
    <section>
      <b className="fs-6 fst-italic">
        <span className="fw-normal">Logged in as:</span> {user}{" "}
      </b>
      <Button variant="secondary">Logout</Button>
    </section>
  );
}

export default Logout
