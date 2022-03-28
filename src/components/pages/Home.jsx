import Todos from "../app/Todos";
import AddTodo from "../app/AddTodo";

const HomePage = ({
  onAddTodo,
  editedTodo,
  signedIn,
  onEmptyEditedTodo,
  showTooltip,
  onToggleShowTooltip,
  items,
  onDeleteTodo,
  onEditTodo,
  onToggleComplete,
}) => {
  return (
    <>
      <AddTodo
        onAddTodo={onAddTodo}
        editedTodo={editedTodo}
        signedIn={signedIn}
        onEmptyEditedTodo={onEmptyEditedTodo}
        showTooltip={showTooltip}
        onToggleShowTooltip={onToggleShowTooltip}
      />
      <Todos
        items={items}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
        signedIn={signedIn}
        onToggleComplete={onToggleComplete}
      />
    </>
  );
};

export default HomePage;
