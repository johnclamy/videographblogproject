const TodoStats = ({ items }) => {
  return (
    <>
      <p className="flex align-middle font-bold capitalize">
        total:{" "}
        <span className="bg-amber-500 rounded-full px-2 ml-2">
          {items.length}
        </span>
      </p>
      <p className="flex align-middle font-bold capitalize">
        completed:{" "}
        <span className="bg-white rounded-full px-2 ml-2 text-blue-900">
          {(items.filter(item => item.isCompleted)).length}
        </span>
      </p>
    </>
  );
};

export default TodoStats