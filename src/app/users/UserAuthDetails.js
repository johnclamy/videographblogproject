import SignOut from './SignOut'

export default function UserAuthDetails({ onToggleAuth }) {
  return (
    <p>
      Signed in as: <b>John Doe</b> <SignOut onToggleAuth={onToggleAuth} />
    </p>
  );
}