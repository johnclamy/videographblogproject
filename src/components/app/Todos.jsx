import Todo from "./Todo"
import StatusAlert from '../layout/StatusAlert'

const Todos = ({ items, signedIn, onDeleteTodo, onEditTodo, onToggleComplete }) => {
  const todoList = items.map((item) => {
    return (
      <ul>
        <Todo
          key={item.id}
          item={item}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
        />
      </ul>
    );
  });
  const todosComponent = !items.length ? (
    <StatusAlert>At present you have no to-dos.</StatusAlert>
  ) : (
    todoList
  );

  return signedIn ? todosComponent : <StatusAlert>Please Sign in to access your To-dos.</StatusAlert>;
};

export default Todos