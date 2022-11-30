import { Navbar, Button } from 'react-bootstrap'

const LogOut = ({ email }) => {
  return (
    <>
      <Navbar.Text style={{marginRight: '1rem'}}>{email}</Navbar.Text>
      <Button size="sm" variant="outline-info">Logout</Button>
    </>
  )
}

export default LogOut