import { useState } from "react";

const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col items-center my-3 p-6 bg-amber-400">
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
          />
        </div>
        <button className="mt-6 py-2 px-4 bg-slate-400 hover:bg-slate-600 text-white uppercase">
          sign in
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
