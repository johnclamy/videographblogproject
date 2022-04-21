import { useState } from 'react'

const initTodos = ['walk the dog', 'cook breakfast']

function App() {
  const [todos, setTodos] = useState(initTodos)
  const [input, setInput] = useState('')

  const handleAddTodo = e => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="sm:container sm:mx-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="my-3 capitalize text-center text-blue-900 text-3xl font-bold">
          my todo list
        </h1>
        <div class="flex h-32 mt-4 w-full items-center justify-center bg-blue-900">
          <form className="flex rounded bg-white w-[30rem]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
              placeholder="write a TODO"
            />
            <button
              type="submit"
              onClick={handleAddTodo}
              disabled={!Boolean(input)}
              className="m-2 rounded px-4 py-2 border-2 bg-white hover:bg-orange-100 border-orange-700 cursor-pointer font-semibold text-orange-700 capitalize"
            >
              add
            </button>
          </form>
        </div>

        <ul className='mt-6'>
          {todos.map((todo) => (
            <li className='border-2 rounded border-gray-200 p-5 mb-1' key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
