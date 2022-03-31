import { useState } from "react";

const SigninForm = ({ onToggleSignin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    onToggleSignin()
    console.log(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center my-3 p-6 bg-amber-400">
      <h1 className="text-black pt-2 pb-4 text-xl font-bold text-center">
        Sign In
      </h1>
      <div className=" flex flex-col p-8 bg-slate-50 max-w-md">
        <div className="flex justify-between align-center">
          <label className="text-md text-gray-800" htmlFor="username">
            username
          </label>
          <input
            id="username"
            className="border py-2 px-3 text-gray-900"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-md text-gray-800" htmlFor="password">
            password
          </label>
          <input
            id="password"
            className="border py-2 px-3 text-gray-900"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className="mt-6 py-2 px-4 bg-slate-400 hover:bg-slate-600 text-white uppercase">
          sign in
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
