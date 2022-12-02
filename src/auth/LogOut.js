import { Navbar, Button } from 'react-bootstrap'
import { logout } from '../global/actions/action-creator'

const LogOut = ({ email, dispatch }) => {
  console.log('logout', email, dispatch)
  return (
    <>
      <Navbar.Text style={{marginRight: '1rem'}}>{email}</Navbar.Text>
      <Button
        size="sm"
        variant="outline-info"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </>
  )
}

export default LogOut