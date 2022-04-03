import SigninForm from '../layout/SigninForm'
import SignUpLink from '../layout/SignUpLink' 

const SigninPage = ({ signedIn, onToggleSignin }) => {
  return (
    <>
      <SigninForm signedIn={signedIn} onToggleSignin={onToggleSignin} />
      <SignUpLink />
    </>
  );
}

export default SigninPage;
