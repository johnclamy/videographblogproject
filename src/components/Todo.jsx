import DeleteIconButton from "./DeleteIconButton";

const Todo = ({ item }) => {
  const { id, todo } = item
  return (
    <li className=" flex justify-between border-2 rounded border-gray-200 p-5 mb-1" key={id}>
      <div>
        <p className="text-xl font-semibold text-blue-900">{todo}</p>
        <p className="text-sm font-normal text-gray-400">{todo}</p>
      </div>
      <DeleteIconButton id={id} />
    </li>
  );
}

export default Todo