import { Link } from "react-router-dom";

const SigninLink = () => {
  return (
    <section className="my-4 text-center">
      <span>Already have an account?</span>{" "}
      <Link className="text-capitalize" to="/">
        sign in
      </Link>
    </section>
  );
};

export default SigninLink;
