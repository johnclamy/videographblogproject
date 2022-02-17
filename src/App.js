import { useState } from 'react';
import data from './data/initialData'
import Layout from './components/layout/Layout';
import Todos from './components/todos/Todos'
import './App.css';

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <Layout>
      <Todos todos={todos} />
    </Layout>
  );
}

export default App;
