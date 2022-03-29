import { useState } from 'react'

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState("");
  return (
    <form className="bg-amber-400 p-4 mt-3 text-center">
      <h1 className="text-black pt-2 pb-4 text-xl font-bold">Sign Up</h1>
      <div className=" flex flex-col p-8 bg-slate-50">
        <div className="flex justify-between">
          <label className="text-lg text-gray-800" htmlFor="username">
            username
          </label>
          <input
            id='username'
            className="bg-gray-200 text-sm px-2 py-1 border border-gray-500"
            type="text"
            value={username}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-lg text-gray-800" htmlFor="passwordOne">
            password
          </label>
          <input
            id='passwordOne'
            className="bg-gray-200 text-sm px-2 py-1 border border-gray-500"
            type="password"
            value={passwordOne}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-lg text-gray-800" htmlFor="passwordTwo">
            confirm password
          </label>
          <input
            id='passwordTwo'
            className="bg-gray-200 text-sm px-2 py-1 border border-gray-500"
            type="password"
            value={passwordTwo}
          />
        </div>
        <button>sign up</button>
      </div>
    </form>
  );
}

export default SignUpForm