import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createUniqueId, removeItemFrom } from "./helper";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Home";
import SigninPage from "./components/pages/Signin";
import SignUpPage from "./components/pages/SignUp";
import Footer from "./components/layout/Footer";
import tempTodos from "./data";

function App() {
  const [todos, setTodos] = useState(tempTodos);
  const [editedTodo, setEditedTodo] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showButtonTooltip, setShowButtonTooltip] = useState(false);

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

  const handleToggleSignIn = () => setSignedIn(!signedIn);
  const handleToggleShowTooltip = () => setShowTooltip(!showTooltip);
  const handleToggleShowButtonTooltip = () =>
    setShowButtonTooltip(!showButtonTooltip);

  console.log('User is signed in?', signedIn)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onAddTodo={addTodo}
                editedTodo={editedTodo}
                signedIn={signedIn}
                onEmptyEditedTodo={emptyEditedTodo}
                showTooltip={showTooltip}
                onToggleShowTooltip={handleToggleShowTooltip}
                items={todos}
                onDeleteTodo={deleteTodo}
                onEditTodo={editTodo}
                onToggleComplete={toggleComplete}
              />
            }
          />
          <Route
            path="/signin"
            element={<SigninPage onToggleSignin={handleToggleSignIn} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

        <Footer
          items={todos}
          onDeleteTodos={deleteTodos}
          signedIn={signedIn}
          showButtonTooltip={showButtonTooltip}
          onToggleShowButtonTooltip={handleToggleShowButtonTooltip}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
