const Todo = ({todo}) => {
  return (
    <li className="border-2 rounded border-gray-200 p-5 mb-1" key={todo}>
      {todo}
    </li>
  );
}

export default Todo