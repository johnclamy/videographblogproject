import { useState, /* useEffect */ } from 'react'
// import { db, collection, onSnapshot, query, orderBy } from './firebase'
import { createUniqueId, removeItemFrom } from './helper'
import tempTodos from './data';
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import Footer from './components/layout/Footer'

function App() {
  // const colRef = collection(db, "todos");
  // const qryRef = query(colRef, orderBy('createdAt'))
  const [todos, setTodos] = useState(tempTodos);
  const [editedTodo, setEditedTodo] = useState(null);
  const [signedIn, setSignedIn] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showButtonTooltip, setShowButtonTooltip] = useState(false)

  /*
  useEffect(() => {
    onSnapshot(qryRef, (snap) => {
      const todos = [];
      snap.docs.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todos);
      console.log(todos);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  const addTodo = (todo) => {
    if (!todo.id) {
      todo.id = createUniqueId().toString();
      todo.isCompleted = false;
    }
    setTodos([...todos, todo]);
  };

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

  const handleToggleSignIn = () => setSignedIn(!signedIn)
  const handleToggleShowTooltip = () => setShowTooltip(!showTooltip);
  const handleToggleShowButtonTooltip = () =>
    setShowButtonTooltip(!showButtonTooltip);

  return (
    <Layout>
      <AddTodo
        onAddTodo={addTodo}
        editedTodo={editedTodo}
        signedIn={signedIn}
        onEmptyEditedTodo={emptyEditedTodo}
        showTooltip={showTooltip}
        onToggleShowTooltip={handleToggleShowTooltip}
      />
      <Todos
        items={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        signedIn={signedIn}
        onToggleComplete={toggleComplete}
      />
      <Footer
        items={todos}
        onDeleteTodos={deleteTodos}
        signedIn={signedIn}
        showButtonTooltip={showButtonTooltip}
        onToggleShowButtonTooltip={handleToggleShowButtonTooltip}
      />
    </Layout>
  );
}

export default App;
