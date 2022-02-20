import Todo from "./Todo"

const Todos = ({ items }) => {
  const todoList = items.map((item) => {
    return (
      <ul>
        <Todo key={item.id} todo={item.todo} />
      </ul>
    );
  });
  const todosComponent = !items.length ? (
    <p className="p-5 rounded-lg text-center text-2xl font-bold bg-teal-300 max-w-screen-sm">Currently you have no to-dos.</p>
  ) : (
    todoList
  );

  return todosComponent
}

export default Todos