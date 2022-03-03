import { useState, useEffect } from 'react'
// import { db, collection, getDocs, addDoc } from './firebase'
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import Footer from './components/layout/Footer'

const tempTodos = [
  { id: "5326931883580409", todo: "feed the dog" },
  { id: "7296572133983615", todo: "cook breakfast" },
  { id: "4821274738313757", todo: "learn a new language" },
  { id: "5113042383785769", todo: "walk the dog" },
];

function App() {
  // const colRef = collection(db, "todos");
  const [todos, setTodos] = useState(tempTodos);

   /* const addTodo = async (todo) => await addDoc(colRef, todo)

  useEffect(() => {
    const getTodos = async () => {
      const dbTodos = await getDocs(colRef)
      setTodos(dbTodos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getTodos()
  }, []);*/

  const addTodo = todo => {
    todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos);
  }

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos items={todos} onDeleteTodo={deleteTodo} />
      <Footer items={todos} />
    </Layout>
  );
}

export default App;
