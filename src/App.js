import Header from './components/layout/Header';
import List from './components/layout/List';
import './App.css';

function App() {
  return (
    <div className="md:container md:mx-auto">
      <div className="max-w-3xl mx-auto">
        <Header />
        <List />
      </div>
    </div>
  );
}

export default App;
