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
    // collection reference
    const colRef = collection(db, "todos");
    // get collection data
    getDocs(colRef).then((snapshot) => console.log(snapshot.docs));
  }, [todos]);

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos todos={todos} />
    </Layout>
  );
}

export default App;
