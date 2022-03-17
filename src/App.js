import { useState, useEffect } from 'react'
import { db, collection, onSnapshot } from './firebase'
import { removeItemFrom } from './helper';
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import Footer from './components/layout/Footer'

function App() {
  const colRef = collection(db, "todos");
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  useEffect(() => {
    onSnapshot(colRef, (snap) => {
      const todos = [];
      snap.docs.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todos);
      console.log(todos);
    });
  }, [])

  const editTodo = (todo) => {
    const id = todo.id;
    const list = removeItemFrom(todos, id);
    setEditedTodo(todos.find((item) => item.id === id));
    setTodos(list);
  };

  const deleteTodo = (id) => setTodos(removeItemFrom(todos, id));

  const deleteTodos = () => {
    let emptyList = todos;
    emptyList = [];
    setTodos(emptyList);
  };

  const toggleComplete = (id) => {
    const toggledTodos = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo;
    });
    setTodos(toggledTodos);
  };

  const emptyEditedTodo = () => {
    if (editedTodo) {
      let todo = editedTodo;
      todo = null;
      setEditedTodo(todo);
    }
  };

  return (
    <Layout>
      <AddTodo
        editedTodo={editedTodo}
        onEmptyEditedTodo={emptyEditedTodo}
      />
      <Todos
        items={todos}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
      />
      <Footer items={todos} onDeleteTodos={deleteTodos} />
    </Layout>
  );
}

export default App;
