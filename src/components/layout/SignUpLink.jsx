import { Link } from 'react-router-dom'

const SignUpLink = () => (
  <p className="text-center text-fuchsia-900 mt-2">
    Don't have an account? <Link className=' text-sm text-blue-400 hover:text-blue-600' to="/signup">Sign Up</Link>
  </p>
);

export default SignUpLink