import { useState } from 'react';
import data from './data/initialData'
import Layout from './components/layout/Layout';
import Todos from './components/app/Todos'
import './App.css';
import AddTodo from './components/app/AddTodo';

function App() {
  const [todos, setTodos] = useState(data);
  const addTodo = todo => setTodos([...todos, todo])

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos todos={todos} />
    </Layout>
  );
}

export default App;
