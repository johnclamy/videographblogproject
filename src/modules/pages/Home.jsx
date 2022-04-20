import { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase.config'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [inactiveInputField, setInactiveInputField] = useState(true)

  const onDelete = async (todoId) => {
    await deleteDoc(doc(db, "todos", todoId));
  };


  useEffect(() => {
    const getTodos = async () => {
      const todos = await getDocs(collection(db, 'todos'))
      setTodos(todos.docs.map(doc => (
        { ...doc.data(), id: doc.id }
      )))
    }
    getTodos()
  }, [onDelete])
  
  return (
    <div className="w-full bg-white rounded-md mt-8 mx-auto shadow-md sm:w-5/6 md:w-4/5 lg:w-3/5">
      <ul className="divide-y-2 divide-gray-400">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200"
            >
              <input className='bg-white pl-2' disabled={inactiveInputField} value={todo.task} />
              <span className="flex justify-end">
                <button>
                  {inactiveInputField
                    ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>)
                    : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                    )}
                </button>
                <button onClick={() => onDelete(todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );



}
export default Home;
