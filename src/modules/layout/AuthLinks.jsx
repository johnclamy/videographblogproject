const AuthLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <a
        href="/"
        className="py-4 px-2 text-blue-900 font-semibold hover:text-orange-600 transition duration-300"
      >
        Sign Up
      </a>
      <a
        href="/"
        className="py-4 px-2 text-blue-900 font-semibold hover:text-orange-600 transition duration-300"
      >
        Sign In
      </a>
    </div>
  );
}

export default AuthLinks