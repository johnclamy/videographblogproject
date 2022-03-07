import { useState } from 'react'
import EditButton from "../layout/EditButton";
import DeleteButton from "../layout/DeleteButton";

const Todo = ({ item, onDeleteTodo, onEditTodo, onToggleComplete }) => {
  const [lineThrough, setLineThrough] = useState(false);
  const itemTodo = !lineThrough ? (
    <p>{item.todo}</p>
  ) : (
    <p className="line-through">{item.todo}</p>
  );

  const handleClick = id => {
    setLineThrough(!lineThrough)
    onToggleComplete(id)
  }
 
  return (
    <li className=" flex flex-row justify-between list-none font-sans text-lg font-medium text-left text-white bg-cyan-400 p-4 my-2">
      <div
        className="cursor-pointer"
        onClick={() => handleClick(item.id)}
      >
        {itemTodo}
      </div>
      <div className="flex space-x-4">
        <EditButton item={item} onEditTodo={onEditTodo} />
        <DeleteButton id={item.id} onDeleteTodo={onDeleteTodo} />
      </div>
    </li>
  );
};

export default Todo