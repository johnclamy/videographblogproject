import { useState } from "react"

const AddTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onAddTodo(todo)
    setTodo('')
  };

  return (
    <form className=" flex justify-center my-3 p-6 bg-amber-400">
      <input
        className="border py-2 px-3 text-gray-900"
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="what to do next..."
      />
      <button
        className="bg-blue-900 hover:bg-blue-400 text-white font-semibold uppercase text-lg p-2 rounded"
        type="submit"
        onClick={handleClick}
      >
        add todo
      </button>
    </form>
  );
};

export default AddTodo