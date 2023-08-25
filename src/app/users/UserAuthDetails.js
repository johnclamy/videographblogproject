import SignOut from './SignOut'

export default function UserAuthDetails({ onSignOut }) {
  return (
    <p className="pl-2 pt-2">
      Signed in as: <b className="mr-4">John Doe</b>{" "}
      <SignOut onSignOut={onSignOut} />
    </p>
  );
}