import { FaSignInAlt } from "react-icons/fa"

export default function Signin({ onSignin }) {
  return (
    <button onClick={onSignin} className="text-amber-200 hover:text-amber-300 hover:no-underline capitalize mr-4">
      <FaSignInAlt />
    </button>
  );
}