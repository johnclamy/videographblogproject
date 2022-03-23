import { useState, /* useEffect */ } from 'react'
// import { db, collection, onSnapshot, query, orderBy } from './firebase'
import { createUniqueId } from './helper'
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
    todo.id = createUniqueId()
    todo.isCompleted = false
    setTodos(...todos, todo)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  };

  const editTodo = (todo) => {
    const id = todo.id;
    // const list = removeItemFrom(todos, id);
    setEditedTodo(todos.find((item) => item.id === id));
    // setTodos(list);
  };

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
        addTodo={addTodo}
        editedTodo={editedTodo}
        onEmptyEditedTodo={emptyEditedTodo}
      />
      <Todos
        items={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        onToggleComplete={toggleComplete}
      />
      <Footer items={todos} onDeleteTodos={deleteTodos} />
    </Layout>
  );
}

export default App;
