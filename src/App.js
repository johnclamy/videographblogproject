import { useState, useEffect } from 'react'
import { db, collection, getDocs } from './firebase'
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => setTodos([...todos, todo])

  useEffect(() => {
    const colRef = collection(db, "todos");
    let dbTodos = [];

    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach(doc => dbTodos.push({ ...doc.data(), id: doc.id }))
    }).catch(err => console.error(err.message))

    setTodos(dbTodos)
  }, []);

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </Layout>
  );
}

export default App;
