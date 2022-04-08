import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from '../../firebase'

const SignUpForm = ({ onToggleSignin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(""); 
  const isInValid =
    email === "" || passwordOne === "" || passwordOne !== passwordTwo;

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, passwordOne)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email, ' has been added successfully');
        onToggleSignin();
        navigate("/");
      })
      .catch((err) => {
        setError(`Failed to sign up.`);
      });
    
    setEmail("");
    setPasswordOne("");
    setPasswordTwo("");
  };

  return (
    <form className="flex flex-col items-center my-3 p-6 bg-amber-400">
      <h1 className="text-black pt-2 pb-4 text-xl font-bold text-center">
        Sign Up
      </h1>
      <div className=" flex flex-col p-8 bg-slate-50 max-w-md">
        <div className="flex justify-between align-center">
          <label className="text-md text-gray-800" htmlFor="email">
            email
          </label>
          <input
            id="email"
            className="border py-2 px-3 text-gray-900"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-md text-gray-800" htmlFor="passwordOne">
            password
          </label>
          <input
            id="passwordOne"
            className="border py-2 px-3 text-gray-900"
            type="password"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-md text-gray-800" htmlFor="passwordTwo">
            confirm password
          </label>
          <input
            id="passwordTwo"
            className="border py-2 px-3 text-gray-900"
            type="password"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={isInValid}
          onClick={handleSubmit}
          className="mt-6 py-2 px-4 bg-slate-400 hover:bg-slate-600 text-white uppercase"
        >
          sign up
        </button>
        {error && (
          <p className="bg-white py-2 px-5 text-center text-red-600 font-bold">
            {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default SignUpForm