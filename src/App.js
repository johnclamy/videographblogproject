import { useState, useEffect } from 'react'
import { db, collection, getDocs } from './firebase'
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import "./App.css";

function App() {
  const colRef = collection(db, "todos");
  const [todos, setTodos] = useState([]);
  const addTodo = todo => setTodos([...todos, todo])

  useEffect(() => {
    const getTodos = async () => {
      const dbTodos = await getDocs(colRef)
      setTodos(dbTodos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getTodos()
  }, []);

  console.log(todos)

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </Layout>
  );
}

export default App;
