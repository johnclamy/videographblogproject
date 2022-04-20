import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../services/firebase.config'

const AddTodo = () => {
  const [task, setTask] = useState('')

  const onAddTodo = async () => {
    await addDoc(collection(db, "todos"), { task, isCompleted: false });
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            What to do next?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="todo-input" className="sr-only">
                Todo
              </label>
              <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                value={task}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Add a todo..."
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={onAddTodo}
              className="cursor-pointer group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white uppercase bg-orange-600 rounded hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              add todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
