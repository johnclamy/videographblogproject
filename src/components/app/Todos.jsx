import Todo from "./Todo"

const Todos = ({ todos }) => {
  const todoList = todos.map((todo) => (
    <ul>
      <Todo todo={todo} />
    </ul>
  ));

  return todoList
}

export default Todos