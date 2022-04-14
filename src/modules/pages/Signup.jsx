import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../auth/authContext'

const Signup = () => {
  const navigate = useNavigate()
  const { createUser } = UserAuth()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const isInvalid =
    password !== passwordConfirm ||
    password === '' ||
    email === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await createUser(email, password)
      navigate('/home')
    } catch (err) {
      setError(err)
      console.error(err.message)
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo192.png" alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to create an account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Confirm password
              </label>
              <input
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                value={passwordConfirm}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="cursor-pointer font-medium text-blue-900 hover:text-orange-600"
              >
                Sign in
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isInvalid}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
