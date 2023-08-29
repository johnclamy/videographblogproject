import SignOut from "../../components/widgets/SignOut";

export default function UserAuthDetails({ onSignOut }) {
  return (
    <p className="text-white flex justify-start items-center gap-2 pr-4">
      <b className="text-sm font-normal">John Doe</b>
      <SignOut onSignOut={onSignOut} />
    </p>
  );
}