const Todo = ({todo}) => {
  return (
    <li className="border-2 rounded border-gray-200 p-5 mb-1" key={todo}>
      <div>
        <p className="text-xl font-semibold text-blue-900">{todo}</p>
        <p className="text-sm font-normal text-gray-400">{todo}</p>
      </div>
    </li>
  );
}

export default Todo