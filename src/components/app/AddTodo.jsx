import { useState, useEffect } from "react";
// import { db, collection, addDoc, serverTimestamp } from "../../firebase";
import AddButton from "../layout/AddButton";
import UpdateButton from "../layout/UpdateButton";
import Tooltip from '../layout/Tooltip'

const AddTodo = ({
  onAddTodo,
  editedTodo,
  onEmptyEditedTodo,
  signedIn,
  showTooltip,
  onToggleShowTooltip
}) => {
  // const colRef = collection(db, "todos");
  const [todo, setTodo] = useState("");
  /*
  const addTodo = async (item) => {
    item.isCompleted = false;
    item.createdAt = serverTimestamp();
    await addDoc(colRef, item);
  }; */

  const handleAddCurrentTodo = () => {
    onAddTodo({ todo });
    setTodo("");
  };

  const toggleButton = !editedTodo ? (
    <AddButton onAddCurrentTodo={handleAddCurrentTodo} signedIn={signedIn} />
  ) : (
    <UpdateButton
      onAddCurrentTodo={handleAddCurrentTodo}
      onEmptyEditedTodo={onEmptyEditedTodo}
    />
  );

  useEffect(() => {
    if (editedTodo) {
      setTodo(editedTodo.todo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form className=" flex justify-center my-3 p-6 bg-amber-400">
        <input
          className="border py-2 px-3 text-gray-900"
          type="input"
          value={todo}
          disabled={!signedIn}
          onChange={(e) => setTodo(e.target.value)}
          onMouseOver={() => onToggleShowTooltip()}
          onMouseLeave={() => onToggleShowTooltip()}
          placeholder={editedTodo ? editedTodo.todo : "what to do next..."}
        />
        {toggleButton}
        {showTooltip && <Tooltip>You need to sign in to enter a todo</Tooltip>}
      </form>
    </>
  );
};

export default AddTodo