import Todo from "./Todo"

const Todos = ({ items, onDeleteTodo }) => {
  console.log(typeof onDeleteTodo);
  const todoList = items.map((item) => {
    return (
      <ul>
        <Todo key={item.id} item={item} onDeleteTodo={onDeleteTodo} />
      </ul>
    );
  });
  const todosComponent = !items.length ? (
    <p className="p-5 rounded-lg text-center text-2xl font-bold bg-teal-300 max-w-screen-sm">
      At present you have no to-dos.
    </p>
  ) : (
    todoList
  );

  return todosComponent
}

export default Todos