import { useState } from 'react'
// import { db, collection, getDocs, addDoc } from './firebase'
import { createUniqueId, removeItemFrom } from './helper';
import tempTodos from './data';
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import Footer from './components/layout/Footer'

function App() {
  // const colRef = collection(db, "todos");
  const [todos, setTodos] = useState(tempTodos);
  const [editedTodo, setEditedTodo] = useState(null)

   /* const addTodo = async (todo) => await addDoc(colRef, todo)

  useEffect(() => {
    const getTodos = async () => {
      const dbTodos = await getDocs(colRef)
      setTodos(dbTodos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getTodos()
  }, []);*/

  const addTodo = todo => {
    if (!todo.id) {
      todo.id = createUniqueId().toString()
      todo.isCompleted = false
    }
    setTodos([...todos, todo])
  }

  const editTodo = todo => {
    const id = todo.id
    const list = removeItemFrom(todos, id)
    setEditedTodo(todos.find((item) => item.id === id));
    setTodos(list)
  }

  const deleteTodo = id => setTodos(removeItemFrom(todos, id));

  const deleteTodos = () => {
    let emptyList = todos
    emptyList = []
    setTodos(emptyList)
  }

  const toggleComplete = id => {
    const toggledTodos = todos.filter(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
        return todo
      }
      return todo
    })
    setTodos(toggledTodos)
  }

  const emptyEditedTodo = () => {
    if (editedTodo) {
      let todo = editedTodo
      todo = null
      setEditedTodo(todo)
    }
  }

  return (
    <Layout>
      <AddTodo
        editedTodo={editedTodo}
        onAddTodo={addTodo}
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
