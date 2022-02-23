import EditButton from "../layout/EditButton";
import DeleteButton from "../layout/DeleteButton";

const Todo = ({ todo }) => (
  <li className=" flex flex-row justify-between list-none font-sans text-lg font-medium text-left text-white bg-cyan-400 p-4 my-2">
    <p>{todo}</p>
    <div className="flex space-x-4">
      <EditButton />
      <DeleteButton />
    </div>
  </li>
);


export default Todo