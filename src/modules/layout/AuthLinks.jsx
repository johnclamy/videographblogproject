const AuthLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <a
        href="/"
        className="py-2 px-2 font-medium text-blue-900 rounded hover:bg-orange-600 hover:text-white transition duration-300"
      >
        Sign Up
      </a>
      <a
        href="/"
        className="py-2 px-2 font-medium text-white bg-orange-600 rounded hover:bg-orange-600 transition duration-300"
      >
        Sign In
      </a>
    </div>
  );
}

export default AuthLinks