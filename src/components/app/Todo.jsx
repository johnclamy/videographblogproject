import EditButton from "../layout/EditButton";
import DeleteButton from "../layout/DeleteButton";

const Todo = ({ item, onDeleteTodo }) => {
  return (
    <li className=" flex flex-row justify-between list-none font-sans text-lg font-medium text-left text-white bg-cyan-400 p-4 my-2">
      <p>{item.todo}</p>
      <div className="flex space-x-4">
        <EditButton />
        <DeleteButton id={item.id} onDeleteTodo={onDeleteTodo} />
      </div>
    </li>
  );
}


export default Todo