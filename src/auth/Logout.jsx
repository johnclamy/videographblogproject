import Button from 'react-bootstrap/Button'

const Logout = ({ user }) => {
  return (
    <section>
      <b>Logged in as: {user} </b>
      <Button variant='secondary'>Logout</Button>
    </section>
  )
}

export default Logout
