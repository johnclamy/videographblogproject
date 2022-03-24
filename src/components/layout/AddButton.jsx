const AddButton = ({ onAddCurrentTodo, signedIn }) => {
  const styles = signedIn
    ? "bg-blue-900 hover:bg-blue-400 text-white font-semibold uppercase text-lg p-2 rounded"
    : "bg-gray-700 hover:bg-gray-500 text-white font-semibold uppercase text-lg p-2 rounded"

  const handleClick = (e) => {
    e.preventDefault();
    onAddCurrentTodo()
  };

  return (
    <button
      disabled={!signedIn}
      className={styles}
      type="submit"
      onClick={handleClick}
    >
      add todo
    </button>
  )
}

export default AddButton