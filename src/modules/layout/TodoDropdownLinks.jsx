const TodoDropdownLinks = () => {
  return (
    <ul>
      <li className="block text-sm px-2 py-4 text-white bg-orange-600 font-semibold">
        Home
      </li>
      <li className="block text-sm px-2 py-4 hover:bg-orange-600 transition duration-300">
        Add Todo
      </li>
      <li className="block text-sm px-2 py-4 hover:bg-orange-600 transition duration-300">
        Edit Todo
      </li>
    </ul>
  );
}

export default TodoDropdownLinks