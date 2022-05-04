import { Link } from 'react-router-dom'

const SignupLink = () => {
  return (
    <section className='my-4 text-center'>
      <span>Don't have an account yet?</span>{' '}
      <Link className="text-capitalize" to='/signup'>
        sign up
      </Link>
    </section>
  )
}

export default SignupLink