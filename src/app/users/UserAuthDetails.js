import SignOut from "../../components/widgets/SignOut";

export default function UserAuthDetails({ onSignOut }) {
  return (
    <p className="text-white flex gap-2 pr-4">
      <b>John Doe</b>
      <SignOut onSignOut={onSignOut} />
    </p>
  );
}