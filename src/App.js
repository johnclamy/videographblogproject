import { useState } from 'react';
import data from './data/initialData'
import Header from './components/layout/Header';
import Todos from './components/todos/Todos'
import './App.css';

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="md:container md:mx-auto">
      <div className="max-w-3xl mx-auto">
        <Header />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
