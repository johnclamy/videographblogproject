export default function Signin({ onSignin }) {
  return (
    <button onClick={onSignin} className="text-amber-200 hover:text-amber-300 hover:no-underline capitalize mr-4">
      sign in
    </button>
  );
}