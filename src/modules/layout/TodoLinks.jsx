const TodoLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <a
        href="/"
        className="py-4 px-2 text-black font-semibold border-b-4 border-orange-600"
      >
        Home
      </a>
      <a
        href="/"
        className="py-4 px-2 text-blue-900 font-semibold hover:text-orange-600 transition duration-300"
      >
        Add Todo
      </a>
      <a
        href="/"
        className="py-4 px-2 text-blue-900 font-semibold hover:text-orange-600 transition duration-300"
      >
        Edit Todo
      </a>
    </div>
  );
};

export default TodoLinks;
