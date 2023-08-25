export default function SignOut({ onSignOut }) {
  return (
    <button
      className="text-cyan-800 hover:text-cyan-700 underline"
      onClick={onSignOut}
    >
      Sign Out
    </button>
  );
}
