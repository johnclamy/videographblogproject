import SigninForm from '../layout/SigninForm'
import SignUpLink from '../layout/SignUpLink' 

const SigninPage = ({ onToggleSignin }) => {
  return (
    <>
      <SigninForm onToggleSignin={onToggleSignin} />
      <SignUpLink />
    </>
  );
}

export default SigninPage;
