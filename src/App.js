import { useState, useEffect } from 'react'
// import { db, collection, getDocs, addDoc } from './firebase'
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import "./App.css";

const tempTodos = [
  { id: '1', todo: 'feed the dog' },
  { id: '2', todo: 'cook breakfast' },
  { id: '3', todo: 'learn a new language' },
  { id: '4', todo: 'walk the dog'}

]

function App() {
  // const colRef = collection(db, "todos");
  const [todos, setTodos] = useState(tempTodos);

   // const addTodo = async (todo) => await addDoc(colRef, todo)
  /*
  useEffect(() => {
    const getTodos = async () => {
      const dbTodos = await getDocs(colRef)
      setTodos(dbTodos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getTodos()
  }, []);*/

  console.log(todos)

  return (
    <Layout>
      <AddTodo /* onAddTodo={addTodo} */ />
      <Todos items={todos} />
    </Layout>
  );
}

export default App;
