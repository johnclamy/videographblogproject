const AddButton = ({ onAddCurrentTodo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onAddCurrentTodo()
  };

  return (
    <button
      className="bg-blue-900 hover:bg-blue-400 text-white font-semibold uppercase text-lg p-2 rounded"
      type="submit"
      onClick={handleClick}
    >
      add todo
    </button>
  )
}

export default AddButton