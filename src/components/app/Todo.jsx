import { useState } from 'react'
import EditButton from "../layout/EditButton";
import DeleteButton from "../layout/DeleteButton";

const Todo = ({ item, onDeleteTodo }) => {
  const [lineThrough, setLineThrough] = useState(false)
  const itemTodo = !lineThrough
    ? <p>{item.todo}</p>
    : <p className='line-through'>{item.todo}</p>;

  return (
    <li className=" flex flex-row justify-between list-none font-sans text-lg font-medium text-left text-white bg-cyan-400 p-4 my-2">
      <div
        className="cursor-pointer"
        onClick={() => setLineThrough(!lineThrough)}
      >
        {itemTodo}
      </div>
      <div className="flex space-x-4">
        <EditButton />
        <DeleteButton id={item.id} onDeleteTodo={onDeleteTodo} />
      </div>
    </li>
  );
}

export default Todo