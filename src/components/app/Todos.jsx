import Todo from "./Todo"

const Todos = ({ todos }) => {
  const todoList = todos.map((todo) => (
    <ul>
      <Todo todo={todo} />
    </ul>
  ));
  const todosComponent = !todos.length ? (
    <p className="p-5 rounded-lg text-center text-2xl font-bold bg-teal-300 max-w-screen-sm">Currently you have no to-dos.</p>
  ) : (
    todoList
  );

  return todosComponent
}

export default Todos