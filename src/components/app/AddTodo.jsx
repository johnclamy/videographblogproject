import { useState } from "react"
import AddButton from "../layout/AddButton";

const AddTodo = ({ onAddTodo, editedTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddCurrentTodo = () => {
    onAddTodo({ todo });
    setTodo("");
  };

  console.log(editedTodo)

  return (
    <form className=" flex justify-center my-3 p-6 bg-amber-400">
      <input
        className="border py-2 px-3 text-gray-900"
        type="input"
        value={!editedTodo ? todo : editedTodo.todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="what to do next..."
      />
      <AddButton onAddCurrentTodo={handleAddCurrentTodo} />
    </form>
  );
};

export default AddTodo