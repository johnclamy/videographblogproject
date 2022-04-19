import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase.config'

const Home = () => {
  const [todos, setTodos] = useState([])
  const todosColRef = collection(db, 'todos')

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getDocs(todosColRef)
      setTodos(todos.docs.map(doc => (
        { ...doc.data(), id: doc.id }
      )))
    }
    getTodos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="w-1/3 container mx-auto mt-3.5 bg-white rounded-lg shadow">
      <ul className="divide-y-2 divide-gray-100">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="p-3">
              <p className="decoration-4 text-slate-700">{todo.task}</p>
              <p className="decoration-1 text-slate-300">{`status: ${todo.isCompleted}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );



}
export default Home;
