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
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit" onClick={handleAddTodo}>
            add todo
          </button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
